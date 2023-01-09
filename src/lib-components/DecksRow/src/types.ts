export type DecksRowProps = {
  deckcode: string;
  matches: number;
  wins: number;
};

export const decksRowProps = {
  deckcode: {
    type: String,
    required: true,
    default: '',
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
