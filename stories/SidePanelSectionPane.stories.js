import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';

export default {
  title: 'Library/SidePanelSectionPane',
  component: SidePanelSectionPane,
  argTypes: {},
};

const Template = (args) => ({
  components: { SidePanelSectionPane },
  setup() {
    return { args };
  },
  data() {
    return {
      filterArray: args.filterArray,
    };
  },
  template: `<div style="width: 320px;">
              <SidePanelSectionPane v-bind="args" v-model:filterArray="filterArray">
                  Testing
              </SidePanelSectionPane>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  filterArray: [],
  title: 'Test',
};

export const FilterActive = Template.bind({});
FilterActive.args = {
  filterArray: [1],
  title: 'Test',
};
