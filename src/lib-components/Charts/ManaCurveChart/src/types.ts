import { PropType } from 'vue';

type DisabledOrUndefined = false | undefined;

export type ManaCurveChartProps = {
  deckCode: string;
  paddingTop: number;
  showDataLabels: boolean;
  dataLabelsOffset: number;
  tooltipsEnabled: boolean;
  displayXScale: boolean;
  animation?: DisabledOrUndefined;
};

export const manaCurveChartProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  paddingTop: {
    type: Number,
    required: false,
    default: 10,
  },
  showDataLabels: {
    type: Boolean,
    required: false,
    default: true,
  },
  dataLabelsOffset: {
    type: Number,
    required: false,
    default: -10,
  },
  tooltipsEnabled: {
    type: Boolean,
    required: false,
    default: true,
  },
  displayXScale: {
    type: Boolean,
    required: false,
    default: true,
  },
  animation: {
    type: Boolean as PropType<DisabledOrUndefined>,
    required: false,
  },
};

export type ManaCurveChartData = {
  [key: string]: Array<number>;
};
