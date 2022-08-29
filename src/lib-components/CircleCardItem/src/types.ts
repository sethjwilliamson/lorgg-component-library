import { SetJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type CircleCardItemProps = {
  cardProp?: SetJsonCard;
  cardCodeProp?: string;
  ignoreCardItem: boolean;
};

export const circleCardItemProps = {
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
  ignoreCardItem: {
    type: Boolean,
    required: false,
  },
};
