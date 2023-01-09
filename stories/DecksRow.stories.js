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
  template: `<div > 
              <DecksRow v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckcode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
};

export const BardNorra = Template.bind({});
BardNorra.args = {
  deckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
};

export const Thralls = Template.bind({});
Thralls.args = {
  deckcode:
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
};

export const TFNami = Template.bind({});
TFNami.args = {
  deckcode:
    'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
};

export const EliseGoHard = Template.bind({});
EliseGoHard.args = {
  deckcode:
    'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
};

export const NoChampionBurn = Template.bind({});
NoChampionBurn.args = {
  deckcode: 'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
};
