import CardLottery from '@/lib-components/CardLottery';

export default {
  title: 'Library/CardLottery',
  component: CardLottery,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardLottery },
  setup() {
    return { args };
  },
  template: `<div > 
              <CardLottery v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
