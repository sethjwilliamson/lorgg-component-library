export type ManaCurveChartProps = {
  deckCode: string;
};

export const manaCurveChartProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
};

export type ManaCurveChartData = {
  [key: string]: Array<number>;
};
