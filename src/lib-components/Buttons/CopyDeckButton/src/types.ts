export type CopyDeckButtonProps = {
  deckCode: string;
};

export const copyDeckButtonProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
};
