import { PropType } from 'vue';

export type ArchetypeSidePanelHighlightProps = {
  cardCodes: string[];
  regions: string[];
};

export const archetypeSidePanelHighlightProps = {
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
};
