import Mock from 'mockjs';

import './user';
import './message-box';

import '@/views/inspection/all/mock';

import '@/views/user/info/mock';
import '@/views/user/setting/mock';

Mock.setup({
  timeout: '600-1000',
});
