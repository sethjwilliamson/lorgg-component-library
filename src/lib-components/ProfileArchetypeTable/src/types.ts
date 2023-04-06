import { ProfileArchetypeRowProps } from '@/lib-components/ProfileArchetypeRow/src/types';
import { PropType } from 'vue';

export type ProfileArchetypeTableProps = {
  rows: ProfileArchetypeRowProps[];
};

export const profileArchetypeTableProps = {
  rows: {
    type: Array as PropType<ProfileArchetypeRowProps[]>,
    required: true,
    default: [],
  },
};
