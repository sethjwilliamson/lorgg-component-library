export type WinrateLineChartDataPoint = {
  matches: number;
  wins: number;
  winrate: number;
  date: Date;
};

export type WinrateLineChartProps = {
  data: Array<WinrateLineChartDataPoint>;
  baseline: number;
};

export const winrateLineChartProps = {
  data: {
    type: Array<WinrateLineChartDataPoint>,
    required: true,
    default: [],
  },
  baseline: {
    type: Number,
    required: false,
    default: 50,
  },
};
