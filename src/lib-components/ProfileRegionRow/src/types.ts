import { RegionNameRefs } from '#/jsons';
import { PropType } from 'vue';

export type ProfileRegionRowProps = {
  regionNameRef: RegionNameRefs;
  matches: number;
  wins: number;
  index: number;
};

export const profileRegionRowProps = {
  regionNameRef: {
    type: String as PropType<RegionNameRefs>,
    required: true,
    default: '01IO001',
  },
  matches: {
    type: Number,
    required: true,
    default: 0,
  },
  wins: {
    type: Number,
    required: true,
    default: 0,
  },
  index: {
    type: Number,
    required: true,
    default: 0,
  },
};
