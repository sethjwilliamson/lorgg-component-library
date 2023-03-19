import { PropType } from 'vue';

export type ArchetypePageFilters = {
  sampleSizeFilters: number[];
  serverFilters: string[];
  timeFilters: string[];
};

export type ArchetypeSidePanelProps = {
  cardCodes: string[];
  filters: ArchetypePageFilters;
  regions: string[];
};

export const archetypeSidePanelProps = {
  cardCodes: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
  regions: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
  filters: {
    type: Object as PropType<ArchetypePageFilters>,
    required: true,
    default: {
      sampleSizeFilters: [],
      serverFilters: [],
      timeFilters: [],
    },
  },
};
