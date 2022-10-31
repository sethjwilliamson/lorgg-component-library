import { Deck } from '#/jsons';
import { PropType } from 'vue';

export type DeckSummaryProps = {
  deck: Deck;
};

export const deckSummaryProps = {
  deck: {
    type: Object as PropType<Deck>,
    required: true,
    default: false,
  },
};
