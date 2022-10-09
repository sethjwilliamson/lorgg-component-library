export type CheckboxItemProps = {
  modelValue: boolean;
  icon?: string;
  prompt: string;
};

export const checkboxItemProps = {
  modelValue: {
    type: Boolean,
    required: true,
    default: false,
  },
  icon: {
    type: String,
    required: false,
    default: undefined,
  },
  prompt: {
    type: String,
    required: true,
    default: '',
  },
};
