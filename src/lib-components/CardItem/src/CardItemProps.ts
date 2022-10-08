import { ObjectWithNumber } from '#/helpers';
import { Deck, CardJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type ShowTippyLocation = 'left-start' | 'right-start' | null;

export type CardItemProps = {
  cardCodeProp?: string;
  cardProp?: CardJsonCard;
  deckList: Deck;
  isDeckBuilder: boolean;
  isRoot: boolean;
  quantityNeeded?: number;
  showTippyLocation: ShowTippyLocation;
  userCardQuantity?: ObjectWithNumber;
};

const props = {
  cardProp: {
    type: Object as PropType<CardJsonCard>,
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
  showTippyLocation: {
    type: String as PropType<ShowTippyLocation>,
    required: false,
    default: null,
  },
};

export { props };
