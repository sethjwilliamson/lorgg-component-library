import { ServerRegion } from '#/jsons';
import { DashboardLeaderboardRowProps } from '@/lib-components/DashboardLeaderboardRow/src/types';
import { PropType } from 'vue';

export type DashboardLeaderboardTableProps = {
  rows: DashboardLeaderboardRowProps[];
  selectedRegion: ServerRegion;
};

export const dashboardLeaderboardTableProps = {
  rows: {
    type: Array as PropType<DashboardLeaderboardRowProps[]>,
    required: true,
    default: [],
  },
  selectedRegion: {
    type: String as PropType<ServerRegion>,
    required: true,
    default: 'americas',
  },
};
