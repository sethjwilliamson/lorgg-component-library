export type FilterProps = {
  filterArray: Array<string>;
};

export const filterProps = {
  filterArray: {
    type: Array<string>,
    required: true,
    default: [],
  },
};
