import { Ref } from 'vue';

export type CardFlip = {
  flipped: Ref<boolean>;
  display: Ref<boolean>;
  cardCode: Ref<string>;
};
