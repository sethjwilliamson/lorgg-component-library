import { CardJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type CardMultiselectMode = 'single' | 'multiple' | 'tags';

export interface CardMultiselectFitlerCallback {
  (a: CardJsonCard): boolean;
}

export type CardMultiselectProps = {
  cardCodes: string[];
  filterCallback: CardMultiselectFitlerCallback;
  mode: CardMultiselectMode;
};

export const cardMultiselectProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
  filterCallback: {
    type: Function as PropType<CardMultiselectFitlerCallback>,
    required: false,
    default: () => {
      return true;
    },
  },
  mode: {
    type: String as PropType<CardMultiselectMode>,
    required: false,
    default: 'tags',
  },
};
