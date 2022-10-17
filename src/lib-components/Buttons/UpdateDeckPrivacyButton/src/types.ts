export type UpdateDeckPrivacyButtonProps = {
  deckId: number;
  deckIsPrivate: boolean;
};

export const updateDeckPrivacyButtonProps = {
  deckId: {
    type: Number,
    required: true,
    default: -1,
  },
  deckIsPrivate: {
    type: Boolean,
    required: true,
    default: true,
  },
};
