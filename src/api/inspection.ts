import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export function queryInspectionList() {
  return axios.get<TableData[]>('/api/inspection/list');
}

export function inspectDetail(iid: number) {
  return axios.get<TableData[]>(`/api/inspection/detail`, {
    params: { inspectionId: iid },
  });
}

export function startInspectSelection(selectIds: number[]) {
  return axios.get('/api/inspection/inspectSelection', {
    params: { ids: selectIds },
  });
}
