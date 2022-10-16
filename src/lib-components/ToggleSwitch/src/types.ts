export type ToggleSwitchProps = {
  selectedOption: number;
  options: Array<string>;
};

export const toggleSwitchProps = {
  selectedOption: {
    type: Number,
    required: true,
    default: -1,
  },
  options: {
    type: Array<string>,
    required: true,
    default: [],
  },
};
