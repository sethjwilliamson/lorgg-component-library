import { PropType } from 'vue';

export type DeckHighlightRegionsProps = {
  regions: string[];
};

export const deckHighlightRegionsProps = {
  regions: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
