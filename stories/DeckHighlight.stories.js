import DeckHighlight from '@/lib-components/DeckHighlight';

export default {
  title: 'Library/DeckHighlight',
  component: DeckHighlight,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckHighlight },
  setup() {
    return { args };
  },
  template: `<div > 
              <DeckHighlight v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  regions: ['Freljord', 'Demacia'],
  cardCodes: ['01FR001', '01DE001'],
};
