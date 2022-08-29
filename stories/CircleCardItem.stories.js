import CircleCardItem from '@/lib-components/CircleCardItem';

export default {
  title: 'Library/CircleCardItem',
  component: CircleCardItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { CircleCardItem },
  setup() {
    return { args };
  },

  template: `<div style="width: 50px">
              <CircleCardItem v-bind="args" />
            </div>`,
});

export const Yasuo = Template.bind({});
Yasuo.args = {
  cardCodeProp: '01IO015',
  ignoreCardItem: false,
};

export const Keywords3 = Template.bind({});
Keywords3.args = {
  cardCodeProp: '03SI001',
};
