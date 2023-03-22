import DeckBuilderSummaryType from '@/lib-components/DeckBuilderSummaryType';

export default {
  title: 'Library/DeckBuilderSummaryType',
  component: DeckBuilderSummaryType,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckBuilderSummaryType },
  setup() {
    return { args };
  },
  template: `<div > 
              <DeckBuilderSummaryType v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  typeSummary: {
    typeRef: 'Champion',
    quantity: 1,
  },
};
