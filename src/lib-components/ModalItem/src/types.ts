import { PropType } from 'vue';

export type ModalItemProps = {
  showModal: boolean;
};

export const modalItemProps = {
  showModal: {
    type: Boolean,
    required: true,
    default: false,
  },
};
