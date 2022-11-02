import { CardStatsToggle } from '@/lib-components/CardStatsRow/src/types';
import { PropType } from 'vue';

export type CardStatsData = {
  cardCode: string;
  matches: number;
  wins: number;
  inclusion: number;
  avgCopies: number;
  mulliganWinrate?: number;
  kept?: number;
  drawnWinrate?: number;
  turnsHeld?: number;
  turnPlayed?: number;
};

export type CardStatsTableProps = {
  cardStatsData: CardStatsData[];
  toggledStats: CardStatsToggle;
  currentSort: string;
  isSortDesc: boolean;
};

export const cardStatsTableProps = {
  cardStatsData: {
    type: Array as PropType<CardStatsData[]>,
    required: true,
    default: [],
  },
  toggledStats: {
    type: Object as PropType<CardStatsToggle>,
    required: true,
    default: {
      matches: true,
      winrate: true,
      inclusion: true,
      avgCopies: true,
      mulliganWinrate: false,
      kept: false,
      drawnWinrate: false,
      turnsHeld: false,
      turnPlayed: false,
    },
  },
  currentSort: {
    type: String,
    required: true,
    default: 'matches',
  },
  isSortDesc: {
    type: Boolean,
    required: true,
    default: true,
  },
};
