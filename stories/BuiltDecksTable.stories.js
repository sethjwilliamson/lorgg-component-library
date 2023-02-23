import BuiltDecksTable from '@/lib-components/BuiltDecksTable';
import { getRandomInt } from '@/helpers/functions';

export default {
  title: 'Library/BuiltDecksTable',
  component: BuiltDecksTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { BuiltDecksTable },
  setup() {
    return { args };
  },
  template: `<div > 
              <BuiltDecksTable v-bind="args" style="height: 90vh" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckRows: [
    {
      deckCode:
        'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
    {
      deckCode:
        'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
      id: getRandomInt(1, 4000),
      name: 'test',
      createdAt: 12345,
      updatedAt: 12345,
    },
  ],
};
