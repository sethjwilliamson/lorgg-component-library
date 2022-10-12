import { RegionNameRefs } from '#/jsons';
import { PropType } from 'vue';

export type RegionItemProps = {
  regionRef: RegionNameRefs | string;
};

export const regionItemProps = {
  regionRef: {
    type: String as PropType<RegionNameRefs | string>,
    required: true,
    default: 'Ionia',
  },
};
