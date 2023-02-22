import { PropType } from 'vue';

export enum SortDirection {
  UP = 'sort-up',
  DOWN = 'sort-down',
  NEITHER = 'sort-neither',
  NOT_SORTABLE = 'not-sortable',
}

export type HeadingItem = {
  id: string;
  isShown: boolean;
  sortDirection: SortDirection;
  title: string;
};

export type LargeTableProps = {
  headingItems: HeadingItem[];
};

export const largeTableProps = {
  headingItems: {
    type: Array as PropType<HeadingItem[]>,
    required: true,
    default: [],
  },
};
