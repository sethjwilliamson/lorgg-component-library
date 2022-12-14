import { AdvancedFilter } from '#/filters';
import { PropType } from 'vue';

export type AdvancedFilterItemProps = {
  filterValue: AdvancedFilter;
};

export const advancedFilterItemProps = {
  filterValue: {
    type: Object as PropType<AdvancedFilter>,
    required: true,
    default: {
      attribute: 'attack',
      equality: '>',
      number: 0,
    },
  },
};
