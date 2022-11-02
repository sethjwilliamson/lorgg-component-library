import CardStatsRow from '@/lib-components/CardStatsRow';

export default {
  title: 'Library/CardStatsRow',
  component: CardStatsRow,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardStatsRow },
  setup() {
    return { args };
  },
  template: `<div style="display:flex">
              <CardStatsRow v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCode: '01IO009',
  toggledStats: {
    matches: true,
    winrate: true,
    inclusion: true,
    avgCopies: true,
    mulliganWinrate: false,
    kept: false,
    drawnWinrate: false,
    turnsHeld: false,
    turnPlayed: false,
  },
  matches: 120,
  wins: 70,
  inclusion: 0.213,
  avgCopies: 2.342,
  mulliganWinrate: 0.564,
  kept: 0.892,
  drawnWinrate: 0.734,
  turnsHeld: 4.123,
  turnPlayed: 6.313,
};

export const All = Template.bind({});
All.args = {
  cardCode: '01IO009',
  toggledStats: {
    matches: true,
    winrate: true,
    inclusion: true,
    avgCopies: true,
    mulliganWinrate: true,
    kept: true,
    drawnWinrate: true,
    turnsHeld: true,
    turnPlayed: true,
  },
  matches: 120,
  wins: 70,
  inclusion: 0.213,
  avgCopies: 2.342,
  mulliganWinrate: 0.564,
  kept: 0.892,
  drawnWinrate: 0.734,
  turnsHeld: 4.123,
  turnPlayed: 6.313,
};
