import { PropType } from 'vue';

export type CopyMeComponentProps = {
  cardCodes: string[];
};

export const copyMeComponentProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
