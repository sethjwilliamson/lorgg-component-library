export type UploadDeckToLorButtonProps = {
  deckCode: string;
  deckName: string;
};

export const uploadDeckToLorButtonProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  deckName: {
    type: String,
    required: true,
    default: '',
  },
};
