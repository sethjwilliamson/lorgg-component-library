import { CardJsonCard, Deck } from '#/jsons';
import { PropType } from 'vue';

export type RegionsLineProps = {
  deckCode: string;
  deck?: Deck;
  cards?: CardJsonCard[];
};

export const regionsLineProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  deck: {
    type: Object as PropType<Deck>,
    required: false,
  },
  cards: {
    type: Array as PropType<CardJsonCard[]>,
    required: false,
  },
};