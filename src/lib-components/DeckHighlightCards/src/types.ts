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
    default: [],
  },
  cardCodes: {
    type: Array as PropType<string[]>,
    required: false,
    default: [],
  },
  regions: {
    type: Array as PropType<string[]>,
    required: false,
    default: [],
  },
};
