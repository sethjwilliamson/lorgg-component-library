import { PropType } from 'vue';

export type AdvancedFilterAttribute =
  | 'attack'
  | 'health'
  | 'cost'
  | 'quantityOwned';
export type AdvancedFilterEquality = '>' | '<' | '=';

export type AdvancedFilterItem = {
  attribute: AdvancedFilterAttribute;
  equality: AdvancedFilterEquality;
  number: number;
};

export type AdvancedFilterItemProps = {
  filterValue: AdvancedFilterItem;
};

export const advancedFilterItemProps = {
  filterValue: {
    type: Object as PropType<AdvancedFilterItem>,
    required: true,
    default: {
      attribute: 'attack',
      equality: '>',
      number: 0,
    },
  },
};
