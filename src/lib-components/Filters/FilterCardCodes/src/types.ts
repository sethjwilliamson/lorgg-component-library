import { PropType } from 'vue';

export type FilterCardCodesProps = {
  filterArray: string[];
};

export const filterCardCodesProps = {
  filterArray: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
