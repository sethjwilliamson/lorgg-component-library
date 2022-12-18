export type FilterServersProps = {
  filterArray: Array<string>;
};

export const filterServersProps = {
  filterArray: {
    type: Array<string>,
    required: true,
    default: [],
  },
};
