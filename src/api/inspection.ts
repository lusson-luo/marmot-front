import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export function queryInspectionList() {
  return axios.get<TableData[]>('/api/inspection/list');
}

export function startInspect(scName: string) {
  return axios.get('/api/inspection/inspect', {
    params: { sceneName: scName },
  });
}

export function startInspectAll() {
  return axios.get('/api/inspection/inspectAll');
}

export function inspectDetail(scName: string) {
  return axios.get<TableData[]>(`/api/inspection/detail/${scName}`);
}
