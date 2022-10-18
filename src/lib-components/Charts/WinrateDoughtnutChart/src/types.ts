export type WinrateDoughtnutChartProps = {
  wins: number;
  matches: number;
};

export const winrateDoughtnutChartProps = {
  wins: {
    type: Number,
    required: true,
    default: 1,
  },
  matches: {
    type: Number,
    required: true,
    default: 2,
  },
};
