import { PropType } from 'vue';

export type LineChartDataPoint = {
  totalMatches: number;
  matches: number;
  wins: number;
  winrate: number;
  date: Date;
};

export type LineChartType = 'winrate' | 'playrate';

export type LineChartProps = {
  data: Array<LineChartDataPoint>;
  baseline: number;
  type: LineChartType;
};

export const lineChartProps = {
  data: {
    type: Array<LineChartDataPoint>,
    required: true,
    default: [],
  },
  baseline: {
    type: Number,
    required: false,
    default: 50,
  },
  type: {
    type: String as PropType<LineChartType>,
    required: true,
    default: 'winrate',
  },
};
