import { getRandomInt } from '@/helpers/functions';
import WinsLossesBarChart from '@/lib-components/Charts/WinsLossesBarChart';

export default {
  title: 'Library/Charts/WinsLossesBarChart',
  component: WinsLossesBarChart,
  argTypes: {},
};

const Template = (args) => ({
  components: { WinsLossesBarChart },
  setup() {
    return { args };
  },
  template: `<div style="background-color: var(--color-2)">
              <WinsLossesBarChart v-bind="args" />
            </div>`,
});

export const Dates = Template.bind({});
Dates.args = {
  data: [
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-29 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-28 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-27 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-26 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-25 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-24 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-23 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-22 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-21 00:00:00'),
    },
    {
      matches: 80,
      wins: 40,
      column: new Date('2022-08-20 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-19 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-18 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-17 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-16 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-15 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-14 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-13 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-12 00:00:00'),
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: new Date('2022-08-11 00:00:00'),
    },
  ],
};

export const Regions = Template.bind({});
Regions.args = {
  data: [
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Targon',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Noxus',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Demacia',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Freljord',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Shadow Isles',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Ionia',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Shurima',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Bilgewater',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Piltover & Zaun',
    },
    {
      matches: 80,
      wins: 40,
      column: 'Bandle City',
    },
  ],
};

export const RoundAttacking = Template.bind({});
RoundAttacking.args = {
  data: [
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Round 1 Attacking',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Round 2 Attacking',
    },
  ],
};

export const Champions = Template.bind({});
Champions.args = {
  data: [
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Annie',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Fizz',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Kennen',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Lucian',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Teemo',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Zoe',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Ahri',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Akshan',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Diana',
    },
    {
      matches: getRandomInt(500, 1000),
      wins: getRandomInt(1, 500),
      column: 'Elise',
    },
  ],
};

export const CommonOpponents = Template.bind({});
CommonOpponents.args = {
  data: [
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'ChronoMirage',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'Drisoth',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'Ichiran Ramen',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'Smiley',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'Snugguls',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'HighInOrbit',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'Alæxænder',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: '藍天风暴',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'Farly Fangirl',
    },
    {
      matches: getRandomInt(50, 100),
      wins: getRandomInt(1, 50),
      column: 'AJäy',
    },
  ],
};
