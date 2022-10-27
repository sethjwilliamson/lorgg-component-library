import CardQuantityBarChart from '@/lib-components/Charts/CardQuantityBarChart';

export default {
  title: 'Library/Charts/CardQuantityBarChart',
  component: CardQuantityBarChart,
  argTypes: {
    type: {
      control: 'select',
      options: ['winrate', 'matches'],
    },
  },
};

const Template = (args) => ({
  components: { CardQuantityBarChart },
  setup() {
    return { args };
  },
  template: `<div :style="{'background-color': 'var(--color-2)', width: '200px'}">
              <CardQuantityBarChart v-bind="args" :style="{height: args.height + 'px'}"/>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      quantity: 0,
      matches: 50,
      wins: 30,
    },
    {
      quantity: 1,
      matches: 60,
      wins: 30,
    },
    {
      quantity: 2,
      matches: 100,
      wins: 30,
    },
    {
      quantity: 3,
      matches: 120,
      wins: 65,
    },
  ],
  type: 'winrate',
};
