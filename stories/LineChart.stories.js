import { getRandomInt } from '@/helpers/functions';
import LineChart from '@/lib-components/Charts/LineChart';

export default {
  title: 'Library/Charts/LineChart',
  component: LineChart,
  argTypes: {},
};

const Template = (args) => ({
  components: { LineChart },
  setup() {
    return { args };
  },
  template: `<div style="background-color: var(--color-2)">
              <LineChart v-bind="args" />
            </div>`,
});

export const Winrate = Template.bind({});
Winrate.args = {
  type: 'winrate',
  baseline: 50,
  data: [
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.59,
      date: new Date('2022-08-29 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.61,
      date: new Date('2022-08-28 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.63,
      date: new Date('2022-08-27 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.6,
      date: new Date('2022-08-26 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.62,
      date: new Date('2022-08-25 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.6,
      date: new Date('2022-08-24 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.59,
      date: new Date('2022-08-23 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.57,
      date: new Date('2022-08-22 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.58,
      date: new Date('2022-08-21 00:00:00'),
    },
    {
      matches: 80,
      totalMatches: 800,
      wins: 40,
      winrate: 0.6,
      date: new Date('2022-08-20 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.55,
      date: new Date('2022-08-19 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.54,
      date: new Date('2022-08-18 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.52,
      date: new Date('2022-08-17 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.48,
      date: new Date('2022-08-16 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.48,
      date: new Date('2022-08-15 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.46,
      date: new Date('2022-08-14 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.43,
      date: new Date('2022-08-13 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.42,
      date: new Date('2022-08-12 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.4,
      date: new Date('2022-08-11 00:00:00'),
    },
  ],
};

export const Playrate = Template.bind({});
Playrate.args = {
  type: 'playrate',
  baseline: 0,
  data: [
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.59,
      date: new Date('2022-08-29 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.61,
      date: new Date('2022-08-28 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.63,
      date: new Date('2022-08-27 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.6,
      date: new Date('2022-08-26 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.62,
      date: new Date('2022-08-25 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.6,
      date: new Date('2022-08-24 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.59,
      date: new Date('2022-08-23 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.57,
      date: new Date('2022-08-22 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.58,
      date: new Date('2022-08-21 00:00:00'),
    },
    {
      matches: 80,
      totalMatches: 800,
      wins: 40,
      winrate: 0.6,
      date: new Date('2022-08-20 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.55,
      date: new Date('2022-08-19 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.54,
      date: new Date('2022-08-18 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.52,
      date: new Date('2022-08-17 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.48,
      date: new Date('2022-08-16 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.48,
      date: new Date('2022-08-15 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.46,
      date: new Date('2022-08-14 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.43,
      date: new Date('2022-08-13 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.42,
      date: new Date('2022-08-12 00:00:00'),
    },
    {
      matches: getRandomInt(500, 1500),
      totalMatches: getRandomInt(2000, 30000),
      wins: getRandomInt(1, 500),
      winrate: 0.4,
      date: new Date('2022-08-11 00:00:00'),
    },
  ],
};
