import { PropType } from 'vue';

export type DeckPageFilters = {
  sampleSizeFilters: number[];
  serverFilters: string[];
  timeFilters: string[];
};

export type DeckSidePanelProps = {
  deckcode: string;
  filters: DeckPageFilters;
};

export const deckSidePanelProps = {
  deckcode: {
    type: String,
    required: true,
    default: '',
  },
  filters: {
    type: Object as PropType<DeckPageFilters>,
    required: true,
    default: {
      sampleSizeFilters: [],
      serverFilters: [],
      timeFilters: [],
    },
  },
};
