import CardOverview from '@/lib-components/CardOverview';

export default {
  title: 'Library/CardOverview',
  component: CardOverview,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardOverview },
  setup() {
    return { args };
  },

  template: `<div style="width: 600px">
              <CardOverview v-bind="args" />
            </div>`,
});

export const Yasuo = Template.bind({});
Yasuo.args = {
  cardCodeProp: '01IO015',
};

export const Keywords3 = Template.bind({});
Keywords3.args = {
  cardCodeProp: '03SI001',
};
