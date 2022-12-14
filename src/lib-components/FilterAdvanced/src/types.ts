import { AdvancedFilter } from '@/lib-components/AdvancedFilterItem/src/types';
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
