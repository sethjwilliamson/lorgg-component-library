import { PropType } from 'vue';

export type CardsRowToggle = {
  card: true;
  matches: boolean;
  winrate: boolean;
  inclusion: boolean;
  avgCopies: boolean;
  mulliganWinrate: boolean;
  keptInMulligan: boolean;
  drawnWinrate: boolean;
  turnsHeld: boolean;
  turnPlayed: boolean;
};

export type CardsRowData = {
  cardCode: string;
  matches: number;
  wins: number;
  inclusion: number;
  avgCopies: number;
  mulliganWinrate?: number;
  keptInMulligan?: number;
  drawnWinrate?: number;
  turnsHeld?: number;
  turnPlayed?: number;
};

export type CardsRowProps = CardsRowData & {
  toggledStats: CardsRowToggle;
  index: number;
};

export const cardsRowProps = {
  cardCode: {
    type: String,
    required: true,
    default: '01IO001',
  },
  toggledStats: {
    type: Object as PropType<CardsRowToggle>,
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
  index: {
    type: Number,
    required: true,
    default: 1,
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
  keptInMulligan: {
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
