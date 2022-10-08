import { CardJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type CardSliceItemProps = {
  cardProp?: CardJsonCard;
  cardCodeProp?: string;
  ignoreCardItem?: boolean;
  color: string;
  name: string;
  manaNumber?: number;
  // routerLink?: Object;
  quantityNumber?: number;
  maintainAspectRatio: boolean;
  showPlusMinus?: boolean;
};

export const cardSliceItemProps = {
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
  ignoreCardItem: {
    type: Boolean,
    required: false,
    default: undefined,
  },
  color: {
    type: String,
    required: true,
    default: '#212a39',
  },
  name: {
    type: String,
    required: true,
    default: '',
  },
  manaNumber: {
    type: Number,
    required: false,
    default: undefined,
  },
  // routerLink: {
  //   type: Object, // as PropType<RouterLink>,
  //   required: false,
  //   default: undefined,
  // },
  quantityNumber: {
    type: Number,
    required: false,
    default: undefined,
  },
  maintainAspectRatio: {
    type: Boolean,
    required: false,
    default: true,
  },
  showPlusMinus: {
    type: Boolean,
    required: false,
    default: false,
  },
};
