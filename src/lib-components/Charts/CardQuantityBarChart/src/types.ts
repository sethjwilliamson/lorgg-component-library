import { PropType } from 'vue';

export type CardQuantityData = {
  quantity: number;
  matches: number;
  wins: number;
};

export type CardQuantityType = 'winrate' | 'matches';

export type CardQuantityBarChartProps = {
  data: Array<CardQuantityData>;
  type: CardQuantityType;
  baseline: number;
};

export const cardQuantityBarChartProps = {
  data: {
    type: Array as PropType<Array<CardQuantityData>>,
    required: true,
    default: [],
  },
  type: {
    type: Object as PropType<CardQuantityType>,
    required: true,
    default: 'winrate',
  },
  baseline: {
    type: Number,
    required: false,
    default: 50,
  },
};
