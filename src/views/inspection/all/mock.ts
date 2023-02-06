import Mock from 'mockjs';

import setupMock, {
  successResponseWrap,
  //   failResponseWrap,
} from '@/utils/setup-mock';

setupMock({
  setup() {
    // Mock.mock(new RegExp('/api/inspection/list'), () => {
    //   // return failResponseWrap(null, '重新登陆', 50008);
    //   const data = Mock.mock({
    //     'data|1-1': [
    //       {
    //         id: '1',
    //         name: 'MariaDB',
    //         count: 23000,
    //         successCount: 22000,
    //         failedCount: 1000,
    //         connection: true,
    //         availability: true,
    //         startTime: '2022-12-28 17:51',
    //         endTime: '2022-12-28 17:53',
    //       },
    //       {
    //         id: '2',
    //         name: 'Redis',
    //         count: 25000,
    //         successCount: 22000,
    //         failedCount: 1000,
    //         connection: true,
    //         availability: true,
    //         startTime: '2022-12-28 17:51',
    //         endTime: '2022-12-28 17:53',
    //       },
    //       {
    //         id: '3',
    //         name: 'RabbitMQ',
    //         count: 22000,
    //         successCount: 21000,
    //         failedCount: 1000,
    //         connection: true,
    //         availability: true,
    //         startTime: '2022-12-28 17:51',
    //         endTime: '2022-12-28 17:53',
    //       },
    //       {
    //         id: '4',
    //         name: 'PostgresSQL',
    //         count: 17000,
    //         successCount: 16000,
    //         failedCount: 1000,
    //         connection: true,
    //         availability: false,
    //         startTime: '2022-12-28 17:51',
    //         endTime: '2022-12-28 17:53',
    //       },
    //       {
    //         id: '5',
    //         name: 'MiniO',
    //         count: 27000,
    //         successCount: 26000,
    //         failedCount: 1000,
    //         connection: false,
    //         availability: true,
    //         startTime: '2022-12-28 17:51',
    //         endTime: '2022-12-28 17:53',
    //       },
    //     ],
    //   });
    //   return successResponseWrap(data.data);
    // });
    // Mock.mock(new RegExp('/api/inspection/detail'), () => {
    //   // return failResponseWrap(null, '重新登陆', 50008);
    //   const data = Mock.mock({
    //     'data|1-1': [
    //       {
    //         id: '1',
    //         taskId: 35062,
    //         name: '创建数据库',
    //         execStatus: true,
    //         errMsg: '',
    //         startTime: '2022-12-28 17:51',
    //       },
    //       {
    //         id: '2',
    //         taskId: 35062,
    //         name: '创建表',
    //         execStatus: false,
    //         errMsg: "dial tcp 127.0.0.1:3306: connect: connection refused, drop database test2",
    //         startTime: '2022-12-28 17:52',
    //       },
    //       {
    //         id: '3',
    //         taskId: 35062,
    //         name: '插入数据',
    //         execStatus: false,
    //         errMsg: "dial tcp 127.0.0.1:3306",
    //         startTime: '2022-12-28 17:52',
    //       },
    //       {
    //         id: '4',
    //         taskId: 35062,
    //         name: '查询数据',
    //         execStatus: true,
    //         errMsg: '',
    //         startTime: '2022-12-28 17:52',
    //       },
    //     ],
    //   });
    //   return successResponseWrap(data.data);
    // });
  },
});
