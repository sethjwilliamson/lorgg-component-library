export type DecksRowProps = {
  deckcode: string;
  index: number;
  matches: number;
  wins: number;
};

export const decksRowProps = {
  deckcode: {
    type: String,
    required: true,
    default: '',
  },
  index: {
    type: Number,
    required: true,
    default: 1,
  },
  matches: {
    type: Number,
    required: true,
    default: 1,
  },
  wins: {
    type: Number,
    required: true,
    default: 1,
  },
};
