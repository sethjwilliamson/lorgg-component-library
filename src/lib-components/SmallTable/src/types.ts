import { PropType } from 'vue';

export type HeadingItem = {
  id: string;
  title: string;
};

export type SmallTableProps = {
  headingItems: HeadingItem[];
};

export const smallTableProps = {
  headingItems: {
    type: Array as PropType<HeadingItem[]>,
    required: true,
    default: [],
  },
};
