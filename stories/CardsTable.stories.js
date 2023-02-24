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

function cardRow() {
  return {
    matches: getRandomInt(2000, 4000),
    wins: getRandomInt(1000, 2000),
    inclusion: Math.random(),
    avgCopies: Math.random() * 3,
    mulliganWinrate: Math.random(),
    keptInMulligan: Math.random(),
    drawnWinrate: Math.random(),
    turnsHeld: Math.random() * 10,
    turnPlayed: Math.random() * 10,
  };
}

export const Default = Template.bind({});
Default.args = {
  cardRows: [
    {
      cardCode: '01IO009',
      ...cardRow(),
    },
    {
      cardCode: '01IO010',
      ...cardRow(),
    },
    {
      cardCode: '01DE009',
      ...cardRow(),
    },
    {
      cardCode: '01FR009',
      ...cardRow(),
    },
    {
      cardCode: '01NX009',
      ...cardRow(),
    },
    {
      cardCode: '02BW009',
      ...cardRow(),
    },
    {
      cardCode: '03MT009',
      ...cardRow(),
    },
    {
      cardCode: '04SH009',
      ...cardRow(),
    },
    {
      cardCode: '05BC001',
      ...cardRow(),
    },
  ],
  cardsRowToggle: {
    card: true,
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

export const Full = Template.bind({});
Full.args = {
  cardRows: [
    {
      cardCode: '01IO009',
      ...cardRow(),
    },
    {
      cardCode: '01IO010',
      ...cardRow(),
    },
    {
      cardCode: '01DE009',
      ...cardRow(),
    },
    {
      cardCode: '01FR009',
      ...cardRow(),
    },
    {
      cardCode: '01NX009',
      ...cardRow(),
    },
    {
      cardCode: '02BW009',
      ...cardRow(),
    },
    {
      cardCode: '03MT009',
      ...cardRow(),
    },
    {
      cardCode: '04SH009',
      ...cardRow(),
    },
    {
      cardCode: '05BC001',
      ...cardRow(),
    },
  ],
  cardsRowToggle: {
    card: true,
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
