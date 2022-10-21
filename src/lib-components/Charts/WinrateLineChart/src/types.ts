import { PropType } from 'vue';

export type WinrateLineChartDataPoint = {
  matches: number;
  wins: number;
  winrate: number;
  date: Date;
};

export type WinrateLineChartProps = {
  data: Array<WinrateLineChartDataPoint>;
};

export const winrateLineChartProps = {
  data: {
    type: Array<WinrateLineChartDataPoint>,
    required: true,
    default: [],
  },
};
