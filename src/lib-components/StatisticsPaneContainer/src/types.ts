import { PropType } from 'vue';

export type StatisticsPaneContainerProps = {
  heading: string;
};

export const statisticsPaneContainerProps = {
  heading: {
    type: String,
    required: false,
    default: '',
  },
};
