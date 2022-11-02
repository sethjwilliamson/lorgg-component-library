export type ZoomSliderProps = {
  modelValue: number;
};

export const zoomSliderProps = {
  modelValue: {
    type: Number,
    required: true,
    default: 5,
  },
};
