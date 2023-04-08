import { PropType } from 'vue';

export type WinsLossesBarChartData = {
  column: string | Date;
  matches: number;
  wins: number;
};

export type WinsLossesBarChartProps = {
  data: WinsLossesBarChartData[];
};

export const winsLossesBarChartProps = {
  data: {
    type: Array as PropType<WinsLossesBarChartData[]>,
    required: true,
    default: '',
  },
};
