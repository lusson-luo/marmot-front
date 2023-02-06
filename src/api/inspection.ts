import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export function queryInspectionList() {
  return axios.get<TableData[]>('/api/inspection/list');
}

export function startInspect(iid: number) {
  return axios.get('/api/inspection/inspect', {
    params: { id: iid },
  });
}

export function startInspectAll() {
  return axios.get('/api/inspection/inspectAll');
}

export function inspectDetail(iid: number) {
  return axios.get<TableData[]>(`/api/inspection/detail`, {
    params: { inspectionId: iid },
  });
}
