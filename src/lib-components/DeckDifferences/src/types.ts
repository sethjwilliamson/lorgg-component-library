import { DeckDifferenceItemProps } from '@/lib-components/DeckDifferenceItem/src/types';
import { PropType } from 'vue';

export type DeckDifferencesProps = {
  differences: DeckDifferenceItemProps[];
};

export const deckDifferencesProps = {
  differences: {
    type: Array as PropType<DeckDifferenceItemProps[]>,
    required: true,
    default: [],
  },
};
