import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const INSPECTION: AppRouteRecordRaw = {
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
      path: 'all',
      name: 'all',
      component: () => import('@/views/inspection/all/index.vue'),
      meta: {
        locale: 'menu.inspection.all',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default INSPECTION;
