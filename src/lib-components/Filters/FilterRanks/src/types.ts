import { PropType } from 'vue';

export type FilterRanksProps = {
  filterArray: string[];
};

export const filterRanksProps = {
  filterArray: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
