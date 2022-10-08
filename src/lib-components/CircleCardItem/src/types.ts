import { CardJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type CircleCardItemProps = {
  cardProp?: CardJsonCard;
  cardCodeProp?: string;
  ignoreCardItem: boolean;
  regions?: Array<string>;
};

export const circleCardItemProps = {
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
  },
  regions: {
    type: Array as PropType<Array<string>>,
    required: false,
    default: undefined,
  },
};
