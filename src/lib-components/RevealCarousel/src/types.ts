import { PropType } from 'vue';

export type RevealCarouselProps = {
  cardCodes: string[];
};

export const revealCarouselProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
