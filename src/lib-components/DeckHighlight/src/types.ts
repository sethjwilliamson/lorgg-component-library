import { CardJsonCard, Deck } from '#/jsons';
import { PropType } from 'vue';

export type DeckHighlightProps = {
  cards?: CardJsonCard[];
  deck?: Deck;
  deckCode: string;
};

export const deckHighlightProps = {
  cards: {
    type: Array as PropType<CardJsonCard[]>,
    required: false,
  },
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  deck: {
    type: Object as PropType<Deck>,
    required: false,
  },
};
