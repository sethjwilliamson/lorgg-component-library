import { RegionNameRefs } from '#/jsons';
import { PropType } from 'vue';

export type ArchetypesRowData = {
  archetypeId: number;
  cards: string[];
  deckcode: string;
  matches: number;
  playrate: number;
  regions: RegionNameRefs[];
  wins: number;
};

export type ArchetypesRowProps = ArchetypesRowData & {
  index: number;
};

export const archetypesRowProps = {
  archetypeId: {
    type: Number,
    required: true,
    default: 1,
  },
  deckcode: {
    type: String,
    required: true,
    default: '',
  },
  index: {
    type: Number,
    required: true,
    default: 1,
  },
  matches: {
    type: Number,
    required: true,
    default: 1,
  },
  wins: {
    type: Number,
    required: true,
    default: 1,
  },
  playrate: {
    type: Number,
    required: true,
    default: 1,
  },
  regions: {
    type: Array as PropType<RegionNameRefs[]>,
    required: true,
    default: [],
  },
  cards: {
    type: Array as PropType<string[]>,
    required: true,
    default: [],
  },
};
