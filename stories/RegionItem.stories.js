import RegionItem from '@/lib-components/RegionItem';

export default {
  title: 'Library/RegionItem',
  component: RegionItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { RegionItem },
  setup() {
    return { args };
  },
  template: `<div style="width: 32px; display: grid;">
              <RegionItem v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  regionRef: 'Demacia',
};
