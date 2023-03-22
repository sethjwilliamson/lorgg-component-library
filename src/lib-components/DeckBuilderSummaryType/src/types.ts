import { TypeRef } from '#/jsons';
import { PropType } from 'vue';

export type DeckCardType = TypeRef | 'Deck';

export type TypeSummary = {
  quantity: number;
  isError: boolean;
  typeRef: DeckCardType;
};

export type DeckBuilderSummaryTypeProps = {
  typeSummary: TypeSummary;
};

export const deckBuilderSummaryTypeProps = {
  typeSummary: {
    type: Object as PropType<TypeSummary>,
    required: true,
    default: {
      quantity: 0,
      isError: false,
      typeRef: 'Champion',
    },
  },
};
