import { ServerRegion } from '#/jsons';
import { PlayerData } from '@/lib-components/LeaderboardTop10Region/src/types';
import { PropType } from 'vue';

export type GraphOptionValue = 'lp' | 'rank' | 'totalPlayers';
export type GraphOption = {
  name: string;
  nameRef: GraphOptionValue;
};

export type LeaderboardOptionsProps = {
  selectedRegion: ServerRegion | null;
  selectedPlayers: number[];
  selectedGraphOption: GraphOptionValue;
  players: PlayerData[];
  updatedAt: number;
  isGraphShown: boolean;
};

export const leaderboardOptionsProps = {
  selectedRegion: {
    type: String as PropType<ServerRegion | null>,
    required: true,
    default: null,
  },
  selectedPlayers: {
    type: Array as PropType<number[]>,
    required: true,
    default: [],
  },
  selectedGraphOption: {
    type: String as PropType<GraphOptionValue>,
    required: true,
    default: 'totalPlayers',
  },
  players: {
    type: Array as PropType<PlayerData[]>,
    required: true,
    default: [],
  },
  updatedAt: {
    type: Number,
    required: true,
    default: 0,
  },
  isGraphShown: {
    type: Boolean,
    required: true,
    default: false,
  },
};
