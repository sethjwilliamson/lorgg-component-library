import { CardsRowData } from '@/lib-components/CardsRow/src/types';
import { PropType } from 'vue';

export type CardsTableProps = {
  cardRows: CardsRowData[];
};

export const cardsTableProps = {
  cardRows: {
    type: Array as PropType<CardsRowData[]>,
    required: true,
    default: [],
  },
};
