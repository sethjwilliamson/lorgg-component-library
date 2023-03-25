import { ServerRegion } from '#/jsons';
import { PlayerData } from '@/lib-components/LeaderboardTop10Region/src/types';
import { PropType } from 'vue';

export type LeaderboardDetailRowProps = PlayerData & {
  index: number;
};

export const leaderboardDetailRowProps = {
  index: {
    type: Number,
    required: true,
    default: 0,
  },
  change: {
    type: Number,
    required: true,
    default: 0,
  },
  favorite_deck: {
    type: String,
    required: true,
    default: '',
  },
  lp: {
    type: Number,
    required: true,
    default: 0,
  },
  matches: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: true,
    default: '',
  },
  rank: {
    type: Number,
    required: true,
    default: 0,
  },
  selected_banner_card: {
    type: String as PropType<string | null>,
    required: true,
    default: '',
  },
  selected_banner_color: {
    type: String as PropType<string | null>,
    required: true,
    default: '',
  },
  server: {
    type: String as PropType<ServerRegion>,
    // type: String,
    required: true,
    default: 'americas',
  },
  updated_at: {
    type: String,
    required: true,
    default: '',
  },
  user_id: {
    type: Number,
    required: true,
    default: 0,
  },
  wins: {
    type: Number,
    required: true,
    default: 0,
  },
};
