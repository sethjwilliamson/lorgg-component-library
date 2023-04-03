export type RevealDayOptionProps = {
  date: Date;
  activated: boolean;
  soon: boolean;
};

export const revealDayOptionProps = {
  date: {
    type: Date,
    required: true,
    default: [],
  },
  activated: {
    type: Boolean,
    required: true,
    default: false,
  },
  soon: {
    type: Boolean,
    required: true,
    default: false,
  },
};
