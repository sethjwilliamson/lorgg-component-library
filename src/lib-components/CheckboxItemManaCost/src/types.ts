export type CheckboxItemProps = {
  isSelected: boolean;
  prompt: number;
};

export const checkboxItemProps = {
  isSelected: {
    type: Boolean,
    required: true,
    default: false,
  },
  prompt: {
    type: Number,
    required: true,
    default: '',
  },
};
