import { RevealDayOptionProps } from '@/lib-components/RevealDayOption/src/types';
import { PropType } from 'vue';

export type RevealDayOptionsProps = {
  days: RevealDayOptionProps[];
};

export const revealDayOptionsProps = {
  days: {
    type: Array as PropType<RevealDayOptionProps[]>,
    required: true,
    default: [],
  },
};
