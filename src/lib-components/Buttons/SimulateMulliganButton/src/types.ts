import { Deck } from '#/jsons';
import { PropType } from 'vue';

export type SimulateMulliganButtonProps = {
  deck: Deck;
};

export const simulateMulliganButtonProps = {
  deck: {
    type: Object as PropType<Deck>,
    required: true,
    default: {},
  },
};
