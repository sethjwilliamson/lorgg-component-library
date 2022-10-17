export type EditDeckNameButtonProps = {
  deckCode: string;
};

export const editDeckNameButtonProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
};
