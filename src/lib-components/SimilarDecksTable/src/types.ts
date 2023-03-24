import { PropType } from 'vue';

export type DeckRowContent = {
  deckcode: string;
  matches: number;
  wins: number;
};

export type DecksTableProps = {
  deckRows: DeckRowContent[];
  originalDeckcode: string;
};

export const decksTableProps = {
  deckRows: {
    type: Array as PropType<DeckRowContent[]>,
    required: true,
    default: [],
  },
  originalDeckcode: {
    type: String,
    required: true,
    default: '',
  },
};
