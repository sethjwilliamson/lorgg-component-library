import { getRandomInt } from '@/helpers/functions';
import RoundCardInfoBarChart from '@/lib-components/Charts/RoundCardInfoBarChart';

export default {
  title: 'Library/Charts/RoundCardInfoBarChart',
  component: RoundCardInfoBarChart,
  argTypes: {
    type: {
      control: 'select',
      options: ['played', 'drawn'],
    },
  },
};

const Template = (args) => ({
  components: { RoundCardInfoBarChart },
  setup() {
    return { args };
  },
  template: `<div :style="{'background-color': 'var(--color-2)', width: '300px'}">
              <RoundCardInfoBarChart v-bind="args" :style="{height: args.height + 'px'}"/>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      round: 1,
      copy: 1,
      matches: getRandomInt(100, 200),
      wins: getRandomInt(50, 100),
    },
    {
      round: 1,
      copy: 2,
      matches: getRandomInt(100, 200),
      wins: getRandomInt(50, 100),
    },
    {
      round: 1,
      copy: 3,
      matches: getRandomInt(100, 200),
      wins: getRandomInt(50, 100),
    },
    {
      round: 2,
      copy: 2,
      matches: getRandomInt(100, 200),
      wins: getRandomInt(50, 100),
    },
    {
      round: 2,
      copy: 1,
      matches: getRandomInt(100, 200),
      wins: getRandomInt(50, 100),
    },
    {
      round: 3,
      copy: 1,
      matches: getRandomInt(100, 200),
      wins: getRandomInt(50, 100),
    },
    {
      round: 3,
      copy: 2,
      matches: getRandomInt(100, 200),
      wins: getRandomInt(50, 100),
    },
    {
      round: 4,
      copy: 1,
      matches: getRandomInt(100, 200),
      wins: getRandomInt(50, 100),
    },
  ],
  type: 'played',
  baseline: 50,
};
