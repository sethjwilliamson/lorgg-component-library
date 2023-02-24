import CardsTable from '@/lib-components/CardsTable';
import { getRandomInt } from '@/helpers/functions';

export default {
  title: 'Library/CardsTable',
  component: CardsTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { CardsTable },
  setup() {
    return { args };
  },
  template: `<div > 
              <CardsTable v-bind="args" style="height: 90vh" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardRows: [
    {
      cardCode: '01IO009',
      matches: 120,
      wins: 70,
      inclusion: 0.213,
      avgCopies: 2.342,
      mulliganWinrate: 0.564,
      keptInMulligan: 0.892,
      drawnWinrate: 0.734,
      turnsHeld: 4.123,
      turnPlayed: 6.313,
    },
    {
      cardCode: '01IO010',
      matches: 120,
      wins: 70,
      inclusion: 0.213,
      avgCopies: 2.342,
      mulliganWinrate: 0.564,
      keptInMulligan: 0.892,
      drawnWinrate: 0.734,
      turnsHeld: 4.123,
      turnPlayed: 6.313,
    },
    {
      cardCode: '01DE009',
      matches: 120,
      wins: 70,
      inclusion: 0.213,
      avgCopies: 2.342,
      mulliganWinrate: 0.564,
      keptInMulligan: 0.892,
      drawnWinrate: 0.734,
      turnsHeld: 4.123,
      turnPlayed: 6.313,
    },
    {
      cardCode: '01FR009',
      matches: 120,
      wins: 70,
      inclusion: 0.213,
      avgCopies: 2.342,
      mulliganWinrate: 0.564,
      keptInMulligan: 0.892,
      drawnWinrate: 0.734,
      turnsHeld: 4.123,
      turnPlayed: 6.313,
    },
  ],
};
