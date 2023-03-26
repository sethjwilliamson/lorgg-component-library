import { PlayerData } from '@/lib-components/LeaderboardTop10Region/src/types';
import { PropType } from 'vue';

export type LeaderboardDetailTableProps = {
  players: PlayerData[];
};

export const leaderboardDetailTableProps = {
  players: {
    type: Array as PropType<PlayerData[]>,
    required: true,
    default: [],
  },
};
