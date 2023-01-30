<template>
  <div>
    <a-card class="general-card" :title="$t('menu.list.inpect')">
      <a-row style="margin-bottom: 16px">
        <a-col :span="12">
          <a-space>
            <a-button type="primary" @click="inspectAll()">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('inspect.operation.all') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-table :columns="columns" :data="inspectionList">
        <template #optional="{ record }">
          <div>
            <a-button type="primary" @click="inspect(record.name)">{{
              $t('inspect.operation.startInpect')
            }}</a-button
            >&nbsp;
            <a-button type="primary" @click="showDetail(record.name)">{{
              $t('inspect.operation.detail')
            }}</a-button>
          </div>
        </template>
      </a-table>
    </a-card>
    <a-modal
      v-model:visible="visible"
      :hide-cancel="true"
      :ok-text="$t('inspect.operation.close')"
      @ok="handleOk"
    >
      <template #title>
        {{ detailTitle }} {{ $t('inspect.detail.title') }}
      </template>
      <div>
        <a-timeline>
          <a-timeline-item
            v-for="(item, key) in detailList"
            :key="key"
            :label="item.execTime"
          >
            <template #dot>
              <icon-check-circle-fill
                v-if="item.execStatus"
                :style="{ fontSize: '12px', color: '#00B42A' }"
              />
              <icon-close-circle-fill
                v-else
                :style="{ fontSize: '12px', color: '#F53F3F' }"
              />
            </template>
            {{ item.name }}
          </a-timeline-item>
        </a-timeline>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import {
    queryInspectionList,
    startInspect,
    startInspectAll,
    inspectDetail,
  } from '@/api/inspection';
  import useLoading from '@/hooks/loading';
  import type { TableData } from '@arco-design/web-vue/es/table/interface';
  import { Modal } from '@arco-design/web-vue';

  const inspectionList = ref<TableData[]>();
  const { loading, setLoading } = useLoading();
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await queryInspectionList();
      inspectionList.value = data;
    } catch (err) {
      console.log('inspection.err: ', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClickSuccess = () => {
    Modal.success({
      title: 'Success Notification',
      content: '提交巡检任务成功',
    });
  };
  const handleClickError = (err: any) => {
    Modal.error({
      title: 'Error Notification',
      content: err,
    });
  };

  export default {
    setup() {
      const columns = [
        {
          title: '中间件',
          dataIndex: 'name',
        },
        {
          title: '巡检次数',
          dataIndex: 'count',
        },
        {
          title: '连接状态',
          dataIndex: 'connection',
          bodyCellStyle: (record: { connection: string }) => {
            if (record.connection) {
              return {
                color: 'rgb(var(--green-6))',
              };
            }
            return {
              color: 'rgb(var(--red-8))',
            };
          },
        },
        {
          title: '应用可用性',
          dataIndex: 'availability',
          bodyCellStyle: (record: { availability: string }) => {
            if (record.availability) {
              return {
                color: 'rgb(var(--green-6))',
              };
            }
            return {
              color: 'rgb(var(--red-8))',
            };
          },
        },
        {
          title: '通过巡检子项数',
          dataIndex: 'successCount',
          bodyCellStyle: () => {
            return {
              color: 'rgb(var(--green-6))',
            };
          },
        },
        {
          title: '失败巡检子项数',
          dataIndex: 'failedCount',
          bodyCellStyle: () => {
            return {
              color: 'rgb(var(--red-8))',
            };
          },
        },
        {
          title: '上次巡检开始时间',
          dataIndex: 'startTime',
        },
        {
          title: '上次巡检结束时间',
          dataIndex: 'endTime',
        },
        {
          title: '执行',
          slotName: 'optional',
        },
      ];
      const inspect = (scName: string) => {
        setLoading(true);
        startInspect(scName)
          .then((response) => {
            handleClickSuccess();
          })
          .catch((error) => {
            handleClickError(error.message);
          });
        setLoading(false);
      };
      const inspectAll = () => {
        setLoading(true);
        startInspectAll()
          .then((response) => {
            handleClickSuccess();
          })
          .catch((error) => {
            handleClickError(error.message);
          });
        setLoading(false);
      };
      fetchData();
      const visible = ref(false);
      const detailList = ref<TableData[]>();
      const detailTitle = ref('');
      const showDetail = (scName: string) => {
        detailTitle.value = scName;
        inspectDetail(scName)
          .then((response) => {
            detailList.value = response.data;
            visible.value = true;
          })
          .catch((error) => {
            handleClickError(error.message);
          });
      };
      const handleOk = () => {
        visible.value = false;
      };
      return {
        columns,
        inspectionList,
        detailList,
        inspect,
        inspectAll,
        visible,
        showDetail,
        handleOk,
        detailTitle,
      };
    },
  };
</script>
