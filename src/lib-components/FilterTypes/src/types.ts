export type FilterTypesProps = {
  filterArray: Array<string>;
};

export const filterTypesProps = {
  filterArray: {
    type: Array<string>,
    required: true,
    default: [],
  },
};
