import { CardJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type CardStatsTableProps = {
  cardProp?: CardJsonCard;
  cardCodeProp?: string;
};

export const cardStatsTableProps = {
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
};
