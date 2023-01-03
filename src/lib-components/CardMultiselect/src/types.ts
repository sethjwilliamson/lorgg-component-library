import { PropType } from 'vue';

export type CardMultiselectMode = 'single' | 'multiple' | 'tags';

export type CardMultiselectProps = {
  cardCodes: string[];
  onlyCollectible: boolean;
  mode: CardMultiselectMode;
};

export const cardMultiselectProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
  onlyCollectible: {
    type: Boolean,
    required: false,
    default: false,
  },
  mode: {
    type: String as PropType<CardMultiselectMode>,
    required: false,
    default: 'tags',
  },
};
