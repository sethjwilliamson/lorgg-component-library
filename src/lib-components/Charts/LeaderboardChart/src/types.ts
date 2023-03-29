import { ServerRegion } from '#/jsons';
import { GraphOptionValue } from '@/lib-components/LeaderboardOptions/src/types';
import { PlayerData } from '@/lib-components/LeaderboardTop10Region/src/types';
import { PropType } from 'vue';

export type LeaderboardChartServerPlayersDataPoint = {
  players: number;
  server: ServerRegion;
  date: Date;
};

export type LeaderboardChartPlayerDataPoint = {
  player: PlayerData;
  lp: number;
  rank: number;
  date: Date;
};

export type LeaderboardChartDataPoint =
  | LeaderboardChartServerPlayersDataPoint
  | LeaderboardChartPlayerDataPoint;

export type LeaderboardChartProps = {
  data: Array<LeaderboardChartDataPoint>;
  type: GraphOptionValue;
  server: ServerRegion | null;
};

export const leaderboardChartProps = {
  data: {
    type: Array<LeaderboardChartDataPoint>,
    required: true,
    default: [],
  },
  type: {
    type: String as PropType<GraphOptionValue>,
    required: true,
    default: 'totalPlayers',
  },
  server: {
    type: String as PropType<ServerRegion>,
    required: false,
    default: null,
  },
};
