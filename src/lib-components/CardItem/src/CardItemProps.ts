import { ObjectWithNumber } from '#/helpers';
import { Deck, SetJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type CardItemProps = {
  cardProp?: SetJsonCard;
  cardCodeProp?: string;
  isRoot: boolean;
  quantityNeeded?: number;
  deckList: Deck;
  isDeckBuilder: boolean;
  userCardQuantity?: ObjectWithNumber;
};

const props = {
  cardProp: {
    type: Object as PropType<SetJsonCard>,
    required: false,
    default: undefined,
  },
  cardCodeProp: {
    type: String,
    required: false,
    default: undefined,
  },
  // See if showQuantity is actually necessary
  // showQuantity: {
  //   type: Boolean,
  //   required: true,
  //   default: true,
  // },
  isRoot: {
    type: Boolean,
    required: true,
  },
  quantityNeeded: {
    type: Number,
    required: false,
    default: undefined,
  },
  deckList: {
    type: Object as PropType<{ [key: string]: number }>,
    required: false,
    default() {
      return {};
    },
  },
  isDeckBuilder: {
    type: Boolean,
    required: false,
    default: false,
  },
  // TODO: Change this to global variable
  userCardQuantity: {
    type: Object as PropType<{ [key: string]: number }>,
    required: false,
    default: undefined,
  },
};

export { props };
