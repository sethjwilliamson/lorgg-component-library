import ArchetypesTable from '@/lib-components/ArchetypesTable';
import { getRandomInt } from '@/helpers/functions';

export default {
  title: 'Library/ArchetypesTable',
  component: ArchetypesTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { ArchetypesTable },
  setup() {
    return { args };
  },
  template: `<div > 
              <ArchetypesTable v-bind="args" style="height: 90vh" />
            </div>`,
});

function properties() {
  return {
    matches: getRandomInt(2000, 4000),
    wins: getRandomInt(1000, 2000),
    archetypeId: getRandomInt(1, 2000),
    playrate: Math.random(),
  };
}

export const Default = Template.bind({});
Default.args = {
  archetypeRows: [
    {
      deckcode:
        'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
      cards: ['02BW026', '02NX007'],
      regions: ['Bilgewater', 'Noxus'],
      ...properties(),
    },
    {
      deckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
      cards: ['06BC015', '06RU001'],
      regions: ['BandleCity', '06RU001'],
      ...properties(),
    },
    {
      deckcode:
        'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
      cards: ['04FR005', '04SH073'],
      regions: ['Freljord', 'Shurima'],
      ...properties(),
    },
    {
      deckcode:
        'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
      cards: ['05BW005', '02BW026'],
      regions: ['ShadowIsles', 'Bilgewater'],
      ...properties(),
    },
    {
      deckcode:
        'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
      cards: ['01SI053', '03SI016'],
      regions: ['ShadowIsles', 'Noxus'],
      ...properties(),
    },
    {
      deckcode:
        'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
      cards: [],
      regions: ['PiltoverZaun', 'Noxus'],
      ...properties(),
    },

    {
      deckcode:
        'CECACBQBEQAQMBJAAIAQKAJIAQBQCAYGBILAEAIEAEGAMAIBAEGBIJZKGQBACAIFDEAQGAIT',
      cards: ['03FR006', '01FR039', '03FR022'],
      regions: ['Freljord', 'ShadowIsles'],
      ...properties(),
    },
    {
      deckcode:
        'CQCQCBAHBUAQMCRHAIDAOLRQAMCQUSNDAGTACBAFA4DQWEAUAIAQKCQ3AICAOJJ3AEAQKBYE',
      cards: ['05BC163'],
      regions: ['BandleCity', 'Shurima'],
      ...properties(),
    },
    {
      deckcode:
        'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
      cards: ['02BW026', '02NX007'],
      regions: ['Bilgewater', 'Noxus'],
      ...properties(),
    },
    {
      deckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
      cards: ['06BC015', '06RU001'],
      regions: ['BandleCity', '06RU001'],
      ...properties(),
    },
    {
      deckcode:
        'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
      cards: ['04FR005', '04SH073'],
      regions: ['Freljord', 'Shurima'],
      ...properties(),
    },
    {
      deckcode:
        'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
      cards: ['05BW005', '02BW026'],
      regions: ['ShadowIsles', 'Bilgewater'],
      ...properties(),
    },
    {
      deckcode:
        'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
      cards: ['01SI053', '03SI016'],
      regions: ['ShadowIsles', 'Noxus'],
      ...properties(),
    },
    {
      deckcode:
        'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
      cards: [],
      regions: ['PiltoverZaun', 'Noxus'],
      ...properties(),
    },

    {
      deckcode:
        'CECACBQBEQAQMBJAAIAQKAJIAQBQCAYGBILAEAIEAEGAMAIBAEGBIJZKGQBACAIFDEAQGAIT',
      cards: ['03FR006', '01FR039', '03FR022'],
      regions: ['Freljord', 'ShadowIsles'],
      ...properties(),
    },
    {
      deckcode:
        'CQCQCBAHBUAQMCRHAIDAOLRQAMCQUSNDAGTACBAFA4DQWEAUAIAQKCQ3AICAOJJ3AEAQKBYE',
      cards: ['05BC163'],
      regions: ['BandleCity', 'Shurima'],
      ...properties(),
    },
  ],
};
