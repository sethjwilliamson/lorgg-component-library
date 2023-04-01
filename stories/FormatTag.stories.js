import FormatTag from '@/lib-components/FormatTag';

export default {
  title: 'Library/FormatTag',
  component: FormatTag,
  argTypes: {
    format: {
      control: 'select',
      options: [
        'client_Formats_Standard_name',
        'client_Deckbuilder_RulesFilters_Singleton',
        'client_Formats_Eternal_name',
        'client_Formats_CommonsOnly_name',
        'client_Formats_EvenCostCards_name',
      ],
    },
  },
};

const Template = (args) => ({
  components: { FormatTag },
  setup() {
    return { args };
  },
  template: `<div style="display: flex"> 
              <FormatTag v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  format: 'client_Formats_Standard_name',
};
