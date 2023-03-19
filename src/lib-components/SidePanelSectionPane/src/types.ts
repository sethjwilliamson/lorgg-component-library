export type SidePanelSectionPaneProps = {
  // TODO: Switch to use filters instead of any
  filterArray?: Array<any>;
  title?: string;
};

export const sidePanelSectionPaneProps = {
  filterArray: {
    type: Array,
    required: false,
    default: undefined,
  },
  title: {
    type: String,
    required: false,
    default: undefined,
  },
};
