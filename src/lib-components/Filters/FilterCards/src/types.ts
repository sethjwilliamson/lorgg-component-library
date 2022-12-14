import { CardFilters } from '#/filters';
import { PropType } from 'vue';

export type FilterCardsProps = {
  filters: CardFilters;
};

export const filterCardsProps = {
  filters: {
    type: Object as PropType<CardFilters>,
    required: true,
    default: {
      advancedFilters: [],
      regionFilters: [],
      manaCostFilters: [],
    },
  },
};
