import { PropType } from 'vue';

export type DeckHighlightCardsProps = {
  cardCodes: string[];
};

export const deckHighlightCardsProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
