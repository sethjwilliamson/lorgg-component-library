import { DeckFilters } from '#/filters';
import { PropType } from 'vue';

export type FilterDecksProps = {
  filters: DeckFilters;
};

export const filterDecksProps = {
  filters: {
    type: Object as PropType<DeckFilters>,
    required: true,
    default: {
      cardFilters: [],
      regionFilters: [],
      sampleSizeFilters: [],
      serverFilters: [],
      timeFilters: [],
    },
  },
};
