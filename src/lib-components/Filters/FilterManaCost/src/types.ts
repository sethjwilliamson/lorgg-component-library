export type FilterProps = {
  filterArray: Array<number>;
};

export const filterProps = {
  filterArray: {
    type: Array<number>,
    required: true,
    default: [],
  },
};
