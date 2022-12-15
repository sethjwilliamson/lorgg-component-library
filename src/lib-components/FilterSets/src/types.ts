import { PropType } from 'vue';

export type FilterSetsProps = {
  filterArray: string[];
};

export const filterSetsProps = {
  filterArray: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
