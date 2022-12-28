<template>
  <a-table :columns="columns" :data="data" />
</template>

<script lang="ts">
  import { reactive } from 'vue';

  export default {
    setup() {
      const columns = [
        {
          title: '应用名称',
          dataIndex: 'name',
        },
        {
          title: '巡检次数',
          dataIndex: 'count',
        },
        {
          title: '连接状态',
          dataIndex: 'connection',
        },
        {
          title: '可用性',
          dataIndex: 'availability',
        },
        {
          title: '上次巡检时间',
          dataIndex: 'execTime',
        },
        {
          title: '执行',
        },
      ];
      const data = reactive([
        {
          key: '1',
          name: 'MariaDB',
          count: 23000,
          connection: '正常',
          availability: '正常',
          execTime: '2022-12-28 17:51',
        },
        {
          key: '2',
          name: 'Redis',
          count: 25000,
          connection: '正常',
          availability: '正常',
          execTime: '2022-12-28 17:51',
        },
        {
          key: '3',
          name: 'RabbitMQ',
          count: 22000,
          connection: '正常',
          availability: '正常',
          execTime: '2022-12-28 17:51',
        },
        {
          key: '4',
          name: 'PostgresSQL',
          count: 17000,
          connection: '正常',
          availability: '异常',
          execTime: '2022-12-28 17:51',
        },
        {
          key: '5',
          name: 'MiniO',
          count: 27000,
          connection: '异常',
          availability: '正常',
          execTime: '2022-12-28 17:51',
        },
      ]);

      return {
        columns,
        data,
      };
    },
  };
</script>
