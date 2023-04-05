import { ProfileChampionRowProps } from '@/lib-components/ProfileChampionRow/src/types';
import { PropType } from 'vue';

export type ProfileChampionTableProps = {
  rows: ProfileChampionRowProps[];
};

export const profileChampionTableProps = {
  rows: {
    type: Array as PropType<ProfileChampionRowProps[]>,
    required: true,
    default: [],
  },
};
