export type FilterProps = {
  filterArray: Array<any>;
};

export const filterProps = {
  filterArray: {
    type: Array,
    required: true,
    default: [],
  },
};
