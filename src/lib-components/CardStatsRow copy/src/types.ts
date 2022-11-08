import { PropType } from 'vue';

export type CardStatsToggle = {
  matches: boolean;
  winrate: boolean;
  inclusion: boolean;
  avgCopies: boolean;
  mulliganWinrate: boolean;
  kept: boolean;
  drawnWinrate: boolean;
  turnsHeld: boolean;
  turnPlayed: boolean;
};

export type CardStatsRowProps = {
  cardCode: string;
  toggledStats: CardStatsToggle;
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

export const cardStatsRowProps = {
  cardCode: {
    type: String,
    required: true,
    default: '01IO001',
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
  matches: {
    type: Number,
    required: true,
    default: 1,
  },
  wins: {
    type: Number,
    required: true,
    default: 1,
  },
  inclusion: {
    type: Number,
    required: true,
    default: 0.5,
  },
  avgCopies: {
    type: Number,
    required: true,
    default: 1,
  },
  mulliganWinrate: {
    type: Number,
    required: false,
    default: undefined,
  },
  kept: {
    type: Number,
    required: false,
    default: undefined,
  },
  drawnWinrate: {
    type: Number,
    required: false,
    default: undefined,
  },
  turnsHeld: {
    type: Number,
    required: false,
    default: undefined,
  },
  turnPlayed: {
    type: Number,
    required: false,
    default: undefined,
  },
};
