import { DashboardLeaderboardRowProps } from '@/lib-components/DashboardLeaderboardRow/src/types';
import { PropType } from 'vue';

export type DashboardLeaderboardTableProps = {
  rows: DashboardLeaderboardRowProps[];
};

export const dashboardLeaderboardTableProps = {
  rows: {
    type: Array as PropType<DashboardLeaderboardRowProps[]>,
    required: true,
    default: [],
  },
};
