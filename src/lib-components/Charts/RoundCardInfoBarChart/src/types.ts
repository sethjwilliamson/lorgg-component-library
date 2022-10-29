import { PropType } from 'vue';

export type RoundCardInfoData = {
  round: number;
  copy: number;
  matches: number;
  wins: number;
};

export type RoundCardInfoType = 'played' | 'drawn';

export type RoundCardInfoBarChartProps = {
  data: Array<RoundCardInfoData>;
  type: RoundCardInfoType;
  baseline: number;
};

export const roundCardInfoBarChartProps = {
  data: {
    type: Array as PropType<Array<RoundCardInfoData>>,
    required: true,
    default: [],
  },
  type: {
    type: String as PropType<RoundCardInfoType>,
    required: true,
    default: 'winrate',
  },
  baseline: {
    type: Number,
    required: false,
    default: 50,
  },
};
