export type CheckboxItemProps = {
  modelValue: boolean;
  prompt: string;
};

export const checkboxItemProps = {
  modelValue: {
    type: Boolean,
    required: true,
    default: false,
  },
  prompt: {
    type: String,
    required: true,
    default: '',
  },
};
