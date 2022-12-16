import { PropType } from 'vue';

export type FilterKeywordsProps = {
  filterArray: string[];
};

export const filterKeywordsProps = {
  filterArray: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
