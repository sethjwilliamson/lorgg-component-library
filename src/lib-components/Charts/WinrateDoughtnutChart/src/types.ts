export type WinrateDoughtnutChartProps = {
  cutout: number;
  matches: number;
  wins: number;
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
  cutout: {
    type: Number,
    required: false,
    default: 145,
  },
};
