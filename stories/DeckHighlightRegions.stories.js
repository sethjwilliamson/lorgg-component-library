import DeckHighlightRegions from '@/lib-components/DeckHighlightRegions';

export default {
  title: 'Library/DeckHighlightRegions',
  component: DeckHighlightRegions,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckHighlightRegions },
  setup() {
    return { args };
  },
  template: `<div > 
              <DeckHighlightRegions v-bind="args" :style="{ width: args.width + 'px' }" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  regions: ['Freljord', 'Demacia'],
  width: 90,
};
