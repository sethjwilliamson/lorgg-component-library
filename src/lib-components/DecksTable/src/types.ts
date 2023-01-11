import { PropType } from 'vue';

export type DeckRowContent = {
  deckCode: string;
  matches: number;
  wins: number;
};

export type DecksTableProps = {
  deckRows: DeckRowContent[];
};

export const decksTableProps = {
  deckRows: {
    type: Array as PropType<DeckRowContent[]>,
    required: true,
    default: [],
  },
};
