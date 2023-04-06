import { DashboardCardRowProps } from '@/lib-components/DashboardCardRow/src/types';
import { PropType } from 'vue';

export type DashboardCardTableProps = {
  rows: DashboardCardRowProps[];
};

export const dashboardCardTableProps = {
  rows: {
    type: Array as PropType<DashboardCardRowProps[]>,
    required: true,
    default: [],
  },
};
