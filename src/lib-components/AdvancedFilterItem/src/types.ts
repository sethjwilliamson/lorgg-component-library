import { PropType } from 'vue';

export type AdvancedFilterAttribute =
  | 'attack'
  | 'health'
  | 'cost'
  | 'quantityOwned';
export type AdvancedFilterEquality = '>' | '<' | '=';

export type AdvancedFilter = {
  attribute: AdvancedFilterAttribute;
  equality: AdvancedFilterEquality;
  number: number;
};

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
