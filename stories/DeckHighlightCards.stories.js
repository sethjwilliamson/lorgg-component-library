import DeckHighlightCards from '@/lib-components/DeckHighlightCards';

export default {
  title: 'Library/DeckHighlightCards',
  component: DeckHighlightCards,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckHighlightCards },
  setup() {
    return { args };
  },
  template: `<div > 
              <DeckHighlightCards v-bind="args" :style="{ width: args.width + 'px' }" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCodes: ['01IO001', '01IO002'],
  width: 90,
};
