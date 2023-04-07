import { getRandomInt } from '@/helpers/functions';
import DeckBlock from '@/lib-components/DeckBlock';

export default {
  title: 'Library/DeckBlock',
  component: DeckBlock,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckBlock },
  setup() {
    return { args };
  },
  template: `<div style="width:320px;"> 
              <DeckBlock v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  type: 'built',
  deckcode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
  deckId: 10,
  userName: 'SevTheDev',
  userId: 10,
  deckName: 'Testing Test',
  updatedAt: new Date('2023-01-01'),
};

export const LongName = Template.bind({});
LongName.args = {
  type: 'built',
  deckcode:
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
  deckId: 10,
  userName: 'SevTheDev',
  userId: 10,
  deckName:
    'Testing Test Testing Test Testing Test Testing Test Testing Test Testing Test',
  updatedAt: new Date('2023-01-01'),
};

export const NoChampions = Template.bind({});
NoChampions.args = {
  type: 'built',
  deckcode: 'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
  deckId: 10,
  userName: 'SevTheDev',
  userId: 10,
  deckName: 'Testing Test',
  updatedAt: new Date('2023-01-01'),
};

export const Standard = Template.bind({});
Standard.args = {
  type: 'built',
  deckcode:
    'CQCQCBYKBEAQOBARAICQUBBRAMCQIBQNBYCACBAIDE2DUAQBAUCAEAQFBLDADVIBAEAQMCQX',
  deckId: 10,
  userName: 'SevTheDev',
  userId: 10,
  deckName: 'Testing Test',
  updatedAt: new Date('2023-01-01'),
};

export const CommonOnly = Template.bind({});
CommonOnly.args = {
  type: 'built',
  deckcode: 'CIBQCBQGDYCAOAYDAYEA6BQHAYBQQDIOCIKQAAA',
  deckId: 10,
  userName: 'SevTheDev',
  userId: 10,
  deckName: 'Testing Test',
  updatedAt: new Date('2023-01-01'),
};

export const DefaultStats = Template.bind({});
DefaultStats.args = {
  type: 'stats',
  deckcode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
  matches: getRandomInt(50, 100),
  wins: getRandomInt(1, 50),
};

export const LongNameStats = Template.bind({});
LongNameStats.args = {
  type: 'stats',
  deckcode:
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
  matches: getRandomInt(50, 100),
  wins: getRandomInt(1, 50),
};

export const NoChampionsStats = Template.bind({});
NoChampionsStats.args = {
  type: 'stats',
  deckcode: 'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
  matches: getRandomInt(50, 100),
  wins: getRandomInt(1, 50),
};

export const StandardStats = Template.bind({});
StandardStats.args = {
  type: 'stats',
  deckcode:
    'CQCQCBYKBEAQOBARAICQUBBRAMCQIBQNBYCACBAIDE2DUAQBAUCAEAQFBLDADVIBAEAQMCQX',
  matches: getRandomInt(50, 100),
  wins: getRandomInt(1, 50),
};

export const CommonOnlyStats = Template.bind({});
CommonOnlyStats.args = {
  type: 'stats',
  deckcode: 'CIBQCBQGDYCAOAYDAYEA6BQHAYBQQDIOCIKQAAA',
  matches: getRandomInt(50, 100),
  wins: getRandomInt(1, 50),
};
