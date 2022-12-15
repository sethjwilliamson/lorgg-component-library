export type FilterRaritiesProps = {
  filterArray: Array<string>;
};

export const filterRaritiesProps = {
  filterArray: {
    type: Array<string>,
    required: true,
    default: [],
  },
};
