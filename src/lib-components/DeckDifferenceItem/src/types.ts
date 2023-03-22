import {
  circleCardItemProps,
  CircleCardItemProps,
} from '@/lib-components/CircleCardItem/src/types';

export type DeckDifferenceItemProps = CircleCardItemProps & {
  difference: number;
};

export const deckDifferenceItemProps = {
  ...circleCardItemProps,
  difference: {
    type: Number,
    required: true,
    default: 1,
  },
};
