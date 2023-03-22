import { CardJsonCard, Deck } from '#/jsons';
import { PropType } from 'vue';

export type DeckBuilderSummaryProps = {
  cards: CardJsonCard[];
  deck: Deck;
};

export const deckBuilderSummaryProps = {
  cards: {
    type: Array as PropType<CardJsonCard[]>,
    required: true,
    default: [],
  },
  deck: {
    type: Object as PropType<Deck>,
    required: true,
    default: {},
  },
};
