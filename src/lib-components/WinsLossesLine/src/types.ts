export type WinsLossesLineProps = {
  wins: number;
  matches: number;
  showDetails: boolean;
};

export const winsLossesLineProps = {
  wins: {
    type: Number,
    required: true,
    default: 1,
  },
  matches: {
    type: Number,
    required: true,
    default: 1,
  },
  showDetails: {
    type: Boolean,
    required: false,
    default: true,
  },
};
