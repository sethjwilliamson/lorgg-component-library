import { PropType } from 'vue';

export type FilterSampleSizeProps = {
  filterArray: number[];
};

export const filterSampleSizeProps = {
  filterArray: {
    type: Array as PropType<number[]>,
    required: true,
    default: [],
  },
};
