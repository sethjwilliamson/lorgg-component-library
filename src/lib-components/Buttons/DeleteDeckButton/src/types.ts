export type DeleteDeckButtonProps = {
  deckId: number;
};

export const deleteDeckButtonProps = {
  deckId: {
    type: Number,
    required: true,
    default: -1,
  },
};
