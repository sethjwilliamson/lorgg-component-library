import { PlayerData } from '@/lib-components/LeaderboardTop10Region/src/types';
import { PropType } from 'vue';

export type LeaderboardTopProps = {
  players: PlayerData[];
};

export const leaderboardTopProps = {
  players: {
    type: Array as PropType<PlayerData[]>,
    required: true,
    default: [],
  },
};
