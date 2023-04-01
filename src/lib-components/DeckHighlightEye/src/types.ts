import { CardJsonCard, Deck } from '#/jsons';
import { PropType } from 'vue';

export type DeckHighlightEyeProps = {
  cards?: CardJsonCard[];
  deck?: Deck;
  deckCode: string;
};

export const deckHighlightEyeProps = {
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
