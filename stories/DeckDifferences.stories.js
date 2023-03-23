import DeckDifferences from '@/lib-components/DeckDifferences';

export default {
  title: 'Library/DeckDifferences',
  component: DeckDifferences,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckDifferences },
  setup() {
    return { args };
  },
  template: `<div > 
              <DeckDifferences v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  differences: [
    {
      cardCodeProp: '03SI001',
      difference: -3,
    },
    {
      cardCodeProp: '03SI002',
      difference: 3,
    },
    {
      cardCodeProp: '03SI003',
      difference: -2,
    },
    {
      cardCodeProp: '03SI004',
      difference: 1,
    },
    {
      cardCodeProp: '03SI005',
      difference: 1,
    },
  ],
};
