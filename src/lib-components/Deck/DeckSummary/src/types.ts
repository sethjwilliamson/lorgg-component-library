import { CardJsonCard, Deck } from '#/jsons';
import { PropType } from 'vue';

export type DeckSummaryProps = {
  cardsProp?: CardJsonCard[];
  deck: Deck;
};

export const deckSummaryProps = {
  cardsProp: {
    type: Object as PropType<CardJsonCard[]>,
    required: false,
    default: undefined,
  },
  deck: {
    type: Object as PropType<Deck>,
    required: true,
    default: {},
  },
};
