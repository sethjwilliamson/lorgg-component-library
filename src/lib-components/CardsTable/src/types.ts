import {
  CardsRowData,
  CardsRowToggle,
} from '@/lib-components/CardsRow/src/types';
import { Prop, PropType } from 'vue';

export type CardsTableProps = {
  cardRows: CardsRowData[];
  cardsRowToggle: CardsRowToggle;
};

export const cardsTableProps = {
  cardRows: {
    type: Array as PropType<CardsRowData[]>,
    required: true,
    default: [],
  },
  cardsRowToggle: {
    type: Object as PropType<CardsRowToggle>,
    requied: true,
    default: {
      card: true,
      matches: true,
      winrate: true,
      inclusion: true,
      avgCopies: true,
      mulliganWinrate: true,
      keptInMulligan: true,
      drawnWinrate: true,
      turnsHeld: true,
      turnPlayed: true,
    },
  },
};
