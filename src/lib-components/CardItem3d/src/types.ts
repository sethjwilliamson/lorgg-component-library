import { Ref } from 'vue';

export type CardItem3dProps = {
  flipped: boolean;
  cardCode: string;
};

export const cardItem3dProps = {
  flipped: {
    type: Boolean,
    required: true,
    default: true,
  },
  cardCode: {
    type: String,
    required: true,
    default: '01IO001',
  },
};
