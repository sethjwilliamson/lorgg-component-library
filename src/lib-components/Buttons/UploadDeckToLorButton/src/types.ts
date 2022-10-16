export type UploadDeckToLorButtonProps = {
  deckCode: string;
  name: string;
};

export const uploadDeckToLorButtonProps = {
  deckCode: {
    type: String,
    required: true,
    default: '',
  },
  name: {
    type: String,
    required: true,
    default: '',
  },
};
