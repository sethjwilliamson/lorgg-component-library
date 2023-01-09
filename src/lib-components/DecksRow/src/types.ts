export type DecksRowProps = {
  deckcode: string;
};

export const decksRowProps = {
  deckcode: {
    type: String,
    required: true,
    default: '',
  },
};
