import { PropType } from 'vue';

export type DataDecksRowProps = {
  type: 'data';
  deckcode: string;
  index: number;
  matches: number;
  wins: number;
};

export type BuiltDecksRowProps = {
  type: 'built';
  deckcode: string;
  index: number;
  id: number;
  name: string;
  updatedAt: number;
  createdAt: number;
};

export type SimilarDecksRowProps = {
  type: 'similar';
  deckcode: string;
  comparedDeckcode: string;
  index: number;
  matches: number;
  wins: number;
};

export type DecksRowProps =
  | DataDecksRowProps
  | BuiltDecksRowProps
  | SimilarDecksRowProps;

export const decksRowProps = {
  type: {
    type: String as PropType<'data' | 'built' | 'similar'>,
    required: true,
    default: 'data',
  },
  deckcode: {
    type: String,
    required: true,
    default: '',
  },
  index: {
    type: Number,
    required: true,
    default: 1,
  },
  matches: {
    type: Number,
    required: false,
    default: 1,
  },
  wins: {
    type: Number,
    required: false,
    default: 1,
  },
  comparedDeckcode: {
    type: String,
    required: false,
    default: '',
  },
  id: {
    type: Number,
    required: false,
    default: 1,
  },
  name: {
    type: String,
    required: false,
    default: '',
  },
  updatedAt: {
    type: Number,
    required: false,
    default: 1,
  },
  createdAt: {
    type: Number,
    required: false,
    default: 1,
  },
};
