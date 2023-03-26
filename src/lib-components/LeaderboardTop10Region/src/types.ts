import { ServerRegion } from '#/jsons';
import { PropType } from 'vue';

// TODO: Move elsewhere
export type PlayerData = {
  change: number | null;
  favorite_deck: string;
  lp: number;
  matches: number;
  name: string;
  rank: number;
  selected_banner_card: string | null;
  selected_banner_color: string | null;
  server: ServerRegion;
  updated_at: string;
  user_id: number;
  wins: number;
};

export type LeaderboardTop10RegionProps = {
  players: PlayerData[];
};

export const leaderboardTop10RegionProps = {
  players: {
    type: Array as PropType<PlayerData[]>,
    required: true,
    default: [],
  },
};
