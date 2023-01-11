import DecksTable from '@/lib-components/DecksTable';
import { getRandomInt } from '@/helpers/functions';

export default {
  title: 'Library/DecksTable',
  component: DecksTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { DecksTable },
  setup() {
    return { args };
  },
  template: `<div > 
              <DecksTable v-bind="args" style="height: 90vh" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckRows: [
    {
      deckCode:
        'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
    {
      deckCode:
        'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
      matches: getRandomInt(2000, 4000),
      wins: getRandomInt(1000, 2000),
    },
  ],
};
