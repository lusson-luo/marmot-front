import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/inspection',
  name: 'inspection',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.inspection',
    requiresAuth: true,
    icon: 'icon-calendar-clock',
    order: 0,
  },
  children: [
    {
      path: 'inspection',
      name: 'inspection',
      component: () => import('@/views/inspection/inspection/index.vue'),
      meta: {
        locale: 'menu.inspection.inspection',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
