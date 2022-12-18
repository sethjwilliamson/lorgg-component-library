export type FilterTimeProps = {
  filterArray: Array<string>;
};

export const filterTimeProps = {
  filterArray: {
    type: Array<string>,
    required: true,
    default: [],
  },
};
