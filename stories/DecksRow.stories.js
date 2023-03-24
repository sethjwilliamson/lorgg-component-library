import { getRandomInt } from '@/helpers/functions';
import DecksRow from '@/lib-components/DecksRow';

export default {
  title: 'Library/DecksRow',
  component: DecksRow,
  argTypes: {},
};

const Template = (args) => ({
  components: { DecksRow },
  setup() {
    return { args };
  },
  template: `<div style="grid-template-columns: repeat(5, 1fr) 50px; grid-template-rows: 50px;" class="table large-table" > 
              <DecksRow v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  type: 'data',
  deckcode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const BardNorra = Template.bind({});
BardNorra.args = {
  type: 'data',
  deckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const Thralls = Template.bind({});
Thralls.args = {
  type: 'data',
  deckcode:
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const TFNami = Template.bind({});
TFNami.args = {
  type: 'data',
  deckcode:
    'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const EliseGoHard = Template.bind({});
EliseGoHard.args = {
  type: 'data',
  deckcode:
    'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const NoChampionBurn = Template.bind({});
NoChampionBurn.args = {
  type: 'data',
  deckcode: 'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const BardNorraSimilar = Template.bind({});
BardNorraSimilar.args = {
  type: 'similar',
  comparedDeckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  deckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const ThrallsSimilar = Template.bind({});
ThrallsSimilar.args = {
  type: 'similar',
  comparedDeckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  deckcode:
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const TFNamiSimilar = Template.bind({});
TFNamiSimilar.args = {
  type: 'similar',
  comparedDeckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  deckcode:
    'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const EliseGoHardSimilar = Template.bind({});
EliseGoHardSimilar.args = {
  type: 'similar',
  comparedDeckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  deckcode:
    'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};

export const NoChampionBurnSimilar = Template.bind({});
NoChampionBurnSimilar.args = {
  type: 'similar',
  comparedDeckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  deckcode: 'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
  matches: getRandomInt(2000, 4000),
  wins: getRandomInt(1000, 2000),
};
