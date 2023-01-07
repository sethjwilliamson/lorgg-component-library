import { CardJsonCard, Deck } from '#/jsons';
import { PropType } from 'vue';

export type DeckPreviewProps = {
  cards?: CardJsonCard[];
  deck?: Deck;
  deckCode: string;
  deckId?: number;
};

export const deckPreviewProps = {
  cards: {
    type: Array as PropType<CardJsonCard[]>,
    required: false,
  },
  deck: {
    type: Object as PropType<Deck>,
    required: false,
  },
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  deckId: {
    type: Number,
    required: false,
  },
};
