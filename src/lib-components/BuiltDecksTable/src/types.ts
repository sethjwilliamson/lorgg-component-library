import { PropType } from 'vue';

export type DeckRowContent = {
  deckCode: string;
  id: number;
  createdAt: number;
  updatedAt: number;
  name: string;
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
