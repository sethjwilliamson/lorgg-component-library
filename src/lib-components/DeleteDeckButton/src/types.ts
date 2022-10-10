export type CopyDeckButtonProps = {
  deckId: number;
};

export const copyDeckButtonProps = {
  deckId: {
    type: Number,
    required: true,
    default: -1,
  },
};
