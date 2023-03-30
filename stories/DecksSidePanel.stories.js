import DeckSidePanel from '@/lib-components/DeckSidePanel';
import { getRandomInt } from '@/helpers/functions';

export default {
  title: 'Library/DeckSidePanel',
  component: DeckSidePanel,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckSidePanel },
  setup() {
    return { args };
  },
  data() {
    return {
      filters: args.filters,
    };
  },
  template: `<div style="width: 320px;"> 
              <DeckSidePanel v-bind="args" v-model:filters="filters" />

              {{ JSON.stringify(filters) }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckcode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const BardNorra = Template.bind({});
BardNorra.args = {
  deckcode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const Thralls = Template.bind({});
Thralls.args = {
  deckcode:
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const TFNami = Template.bind({});
TFNami.args = {
  deckcode:
    'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const EliseGoHard = Template.bind({});
EliseGoHard.args = {
  deckcode:
    'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const NoChampionBurn = Template.bind({});
NoChampionBurn.args = {
  deckcode: 'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};
