import { PropType } from 'vue';

export type ShowDeckButtons = {
  deleteDeck: boolean;
  updateDeckPrivacy: boolean;
  editDeckName: boolean;
  gemsCost: boolean;
  openArchetypePage: boolean;
  simulateMulligan: boolean;
  openInDeckBuilder: boolean;
  copyDeckCode: boolean;
  uploadDeckToLor: boolean;
  shareDeck: boolean;
};

export type DeckButtonsProps = {
  deckCode: string;
  deckId?: number;
  showButtons: ShowDeckButtons;
};

export const deckButtonsProps = {
  deckCode: {
    type: String,
    required: true,
    default: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  },
  deckId: {
    type: Number,
    required: false,
  },
  showButtons: {
    type: Object as PropType<ShowDeckButtons>,
    required: true,
    default: {
      deleteDeck: true,
      updateDeckPrivacy: true,
      editDeckName: true,
      gemsCost: true,
      openArchetypePage: true,
      simulateMulligan: true,
      openInDeckBuilder: true,
      copyDeckCode: true,
      uploadDeckToLor: true,
      shareDeck: true,
    },
  },
};
