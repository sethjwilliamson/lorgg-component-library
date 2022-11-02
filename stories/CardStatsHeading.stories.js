import CardStatsHeading from '@/lib-components/CardStatsHeading';

export default {
  title: 'Library/CardStatsHeading',
  component: CardStatsHeading,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardStatsHeading },
  setup() {
    return { args };
  },
  template: `<div style="display:flex">
              <CardStatsHeading v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  toggledStats: {
    matches: true,
    winrate: true,
    inclusion: true,
    avgCopies: true,
    mulliganWinrate: false,
    keptInMulligan: false,
    drawnWinrate: false,
    turnsHeld: false,
    turnPlayed: false,
  },
};

export const All = Template.bind({});
All.args = {
  toggledStats: {
    matches: true,
    winrate: true,
    inclusion: true,
    avgCopies: true,
    mulliganWinrate: true,
    keptInMulligan: true,
    drawnWinrate: true,
    turnsHeld: true,
    turnPlayed: true,
  },
};
