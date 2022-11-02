import { CardStatsToggle } from '@/lib-components/CardStatsRow/src/types';
import { PropType } from 'vue';

export type CardStatsHeadingProps = {
  toggledStats: CardStatsToggle;
  currentSort: string;
  isSortDesc: boolean;
};

export const cardStatsHeadingProps = {
  toggledStats: {
    type: Object as PropType<CardStatsToggle>,
    required: true,
    default: {
      matches: true,
      winrate: true,
      inclusion: true,
      avgCopies: true,
      mulliganWinrate: false,
      keptInMulligan: false,
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
