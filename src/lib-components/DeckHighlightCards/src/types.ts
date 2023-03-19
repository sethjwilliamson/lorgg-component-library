import { CardJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type DeckHighlightCardsProps = {
  cards?: CardJsonCard[];
  cardCodes?: string[];
  regions?: string[];
};

export const deckHighlightCardsProps = {
  cards: {
    type: Array as PropType<CardJsonCard[]>,
    required: false,
    default: undefined,
  },
  cardCodes: {
    type: Array as PropType<string[]>,
    required: false,
    default: undefined,
  },
  regions: {
    type: Array as PropType<string[]>,
    required: false,
    default: [],
  },
};
