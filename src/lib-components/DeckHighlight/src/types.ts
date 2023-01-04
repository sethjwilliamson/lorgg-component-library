import { PropType } from 'vue';

export type DeckHighlightProps = {
  cardCodes: string[];
  regions: string[];
};

export const deckHighlightProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
  regions: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
