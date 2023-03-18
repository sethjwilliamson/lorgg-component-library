import { ArchetypesRowData } from '@/lib-components/ArchetypesRow/src/types';
import { PropType } from 'vue';

export type ArchetypesTableProps = {
  archetypeRows: ArchetypesRowData[];
};

export const archetypesTableProps = {
  archetypeRows: {
    type: Array as PropType<ArchetypesRowData[]>,
    required: true,
    default: [],
  },
};
