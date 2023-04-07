import { PropType } from 'vue';

export type BuiltDeckBlockProps = {
  type: 'built';
  deckcode: string;
  deckId: number;
  userName: string;
  userId: number;
  deckName: string;
  updatedAt: Date;
};

export type StatsDeckBlockProps = {
  type: 'stats';
  deckcode: string;
  wins: number;
  matches: number;
};

export type DeckBlockProps = BuiltDeckBlockProps | StatsDeckBlockProps;

export const deckBlockProps = {
  deckcode: {
    type: String,
    required: true,
    default: '',
  },
  type: {
    type: String as PropType<'built' | 'stats'>,
    required: true,
    default: 'built',
  },
  wins: {
    type: Number,
    required: false,
    default: 0,
  },
  matches: {
    type: Number,
    required: false,
    default: 0,
  },
  deckId: {
    type: Number,
    required: false,
    default: 0,
  },
  userName: {
    type: String,
    required: false,
    default: '',
  },
  userId: {
    type: Number,
    required: false,
    default: 0,
  },
  deckName: {
    type: String,
    required: false,
    default: '',
  },
  updatedAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
};
