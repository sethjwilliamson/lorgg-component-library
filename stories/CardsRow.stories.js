import CardsRow from '@/lib-components/CardsRow';

export default {
  title: 'Library/CardsRow',
  component: CardsRow,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardsRow },
  setup() {
    return { args };
  },
  template: `<div style="grid-template-columns: repeat(${
    Object.values(args.toggledStats).filter((x) => x).length + 1
  }, 1fr) 50px; grid-template-rows: 50px;" class="table large-table" > 
              <CardsRow v-bind="args" />
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
  index: 1,
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
  index: 1,
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
