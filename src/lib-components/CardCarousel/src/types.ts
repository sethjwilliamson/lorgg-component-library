import { PropType } from 'vue';

export type CardCarouselProps = {
  cardCodes: string[];
};

export const cardCarouselProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
