import { getRandomInt } from '@/helpers/functions';
import ArchetypesRow from '@/lib-components/ArchetypesRow';

export default {
  title: 'Library/ArchetypesRow',
  component: ArchetypesRow,
  argTypes: {},
};

const Template = (args) => ({
  components: { ArchetypesRow },
  setup() {
    return { args };
  },
  template: `<div style="grid-template-columns: repeat(4, 1fr) 50px; grid-template-rows: 50px;" class="table large-table" > 
              <ArchetypesRow v-bind="args" />
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
  deckcode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
  cards: ['02BW026', '02NX007'],
  regions: ['Bilgewater', 'Noxus'],
  index: 0,
  ...properties(),
};

export const BardNorra = Template.bind({});
BardNorra.args = {
  deckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  cards: ['06BC015', '06RU001'],
  regions: ['BandleCity', '06RU001'],
  // index: 0,
  ...properties(),
};

export const Thralls = Template.bind({});
Thralls.args = {
  deckcode:
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
  cards: ['04FR005', '04SH073'],
  regions: ['Freljord', 'Shurima'],
  // index: 1,
  ...properties(),
};

export const TFNami = Template.bind({});
TFNami.args = {
  deckcode:
    'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
  cards: ['05BW005', '02BW026'],
  regions: ['ShadowIsles', 'Bilgewater'],
  // index: 2,
  ...properties(),
};

export const EliseGoHard = Template.bind({});
EliseGoHard.args = {
  deckcode:
    'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
  cards: ['01SI053', '03SI016'],
  regions: ['ShadowIsles', 'Noxus'],
  // index: 3,
  ...properties(),
};

export const NoChampionBurn = Template.bind({});
NoChampionBurn.args = {
  deckcode: 'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
  cards: [],
  regions: ['PiltoverZaun', 'Noxus'],
  // index: 4,
  ...properties(),
};

export const FeelTheRush = Template.bind({});
FeelTheRush.args = {
  deckcode:
    'CECACBQBEQAQMBJAAIAQKAJIAQBQCAYGBILAEAIEAEGAMAIBAEGBIJZKGQBACAIFDEAQGAIT',
  cards: ['03FR006', '01FR039', '03FR022'],
  regions: ['Freljord', 'ShadowIsles'],
  // index: 5,
  ...properties(),
};

export const Ziggs = Template.bind({});
Ziggs.args = {
  deckcode:
    'CQCQCBAHBUAQMCRHAIDAOLRQAMCQUSNDAGTACBAFA4DQWEAUAIAQKCQ3AICAOJJ3AEAQKBYE',
  cards: ['05BC163'],
  regions: ['BandleCity', 'Shurima'],
  // index: 6,
  ...properties(),
};
