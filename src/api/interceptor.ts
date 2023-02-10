import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import { useUserStore } from '@/store';
import { getToken, setToken } from '@/utils/auth';
import jwtDecode from 'jwt-decode';
import { refreshToken } from '@/api/user';

export interface HttpResponse<T = unknown> {
  status: number;
  message: string;
  code: number;
  data: T;
}

if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    const token = getToken();
    // const tokenData = jwt.decode(token);

    // decodedHeader.exp
    if (token) {
      const decodedHeader = jwtDecode(token);
      const now = Date.parse(new Date().toString()) / 1000;
      if (
        config.url !== '/api/user/refresh' &&
        decodedHeader.exp > now &&
        decodedHeader.exp - 60 < now
      ) {
        console.log('ref token', now, decodedHeader.exp);
        refreshToken()
          .then((res) => {
            setToken(res.data.token);
          })
          .finally();
      }
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    if (res.code !== 0 && res.code !== 20000) {
      Message.error({
        content: res.message || 'Error',
        duration: 5 * 1000,
      });
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (
        [50008, 50012, 50014].includes(res.code) &&
        response.config.url !== '/api/user/info'
      ) {
        Modal.error({
          title: 'Confirm logout',
          content: '您已登出，您可以取消以留在此页面，或重新登录',
          okText: '重新登陆',
          async onOk() {
            const userStore = useUserStore();

            await userStore.logout();
            window.location.reload();
          },
        });
      }
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    Message.error({
      content: error.msg || 'Request Error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
