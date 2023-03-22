import DeckDifferenceItem from '@/lib-components/DeckDifferenceItem';

export default {
  title: 'Library/DeckDifferenceItem',
  component: DeckDifferenceItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckDifferenceItem },
  setup() {
    return { args };
  },
  template: `<div style="width: 40px;"> 
              <DeckDifferenceItem v-bind="args" />
            </div>`,
});

export const Difference1 = Template.bind({});
Difference1.args = {
  cardCodeProp: '01IO015',
  ignoreCardItem: false,
  difference: 1,
};

export const DifferenceMinus3 = Template.bind({});
DifferenceMinus3.args = {
  cardCodeProp: '03SI001',
  difference: -3,
};
