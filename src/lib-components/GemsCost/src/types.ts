import { Deck } from '#/jsons';
import { PropType } from 'vue';

export type GemsCostProps = {
  deck: Deck;
};

export const gemsCostProps = {
  deck: {
    type: Object as PropType<Deck>,
    required: true,
    default: {},
  },
};
