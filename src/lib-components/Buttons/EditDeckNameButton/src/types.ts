export type EditDeckNameButtonProps = {
  deckId: number;
  deckName: string;
};

export const editDeckNameButtonProps = {
  deckId: {
    type: Number,
    required: true,
    default: -1,
  },
  deckName: {
    type: String,
    required: true,
    default: '',
  },
};
