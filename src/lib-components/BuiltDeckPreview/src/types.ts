import { PropType } from 'vue';

export type BuiltDeckPreviewProps = {
  deckcode: string;
  deckId: number;
  userName: string;
  userId: string;
  deckName: string;
  updatedAt: Date;
};

export const builtDeckPreviewProps = {
  deckcode: {
    type: String,
    required: true,
    default: '',
  },
  deckId: {
    type: Number,
    required: true,
    default: 0,
  },
  userName: {
    type: String,
    required: true,
    default: '',
  },
  userId: {
    type: String,
    required: true,
    default: '',
  },
  deckName: {
    type: String,
    required: true,
    default: '',
  },
  updatedAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
};
