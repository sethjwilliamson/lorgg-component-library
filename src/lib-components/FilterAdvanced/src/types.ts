import { AdvancedFilter } from '#/filters';
import { PropType } from 'vue';

export type FilterAdvancedProps = {
  filterValue: AdvancedFilter[];
};

export const filterAdvancedProps = {
  filterValue: {
    type: Array as PropType<AdvancedFilter[]>,
    required: true,
    default: [],
  },
};
