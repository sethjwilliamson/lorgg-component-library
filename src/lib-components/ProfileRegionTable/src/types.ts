import { ProfileRegionRowProps } from '@/lib-components/ProfileRegionRow/src/types';
import { PropType } from 'vue';

export type ProfileRegionTableProps = {
  rows: ProfileRegionRowProps[];
};

export const profileRegionTableProps = {
  rows: {
    type: Array as PropType<ProfileRegionRowProps[]>,
    required: true,
    default: [],
  },
};
