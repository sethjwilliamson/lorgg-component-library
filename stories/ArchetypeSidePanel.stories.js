import ArchetypeSidePanel from '@/lib-components/ArchetypeSidePanel';

export default {
  title: 'Library/ArchetypeSidePanel',
  component: ArchetypeSidePanel,
  argTypes: {},
};

const Template = (args) => ({
  components: { ArchetypeSidePanel },
  setup() {
    return { args };
  },
  data() {
    return {
      filters: args.filters,
    };
  },
  template: `<div style="width: 320px;"> 
              <ArchetypeSidePanel v-bind="args" v-model:filters="filters" />

              {{ JSON.stringify(filters) }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCodes: ['02BW026', '02NX007'],
  regions: ['Bilgewater', 'Noxus'],
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const BardNorra = Template.bind({});
BardNorra.args = {
  cardCodes: ['06BC015', '06RU001'],
  regions: ['BandleCity', '06RU001'],
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const Thralls = Template.bind({});
Thralls.args = {
  cardCodes: ['04FR005', '04SH073'],
  regions: ['Freljord', 'Shurima'],
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const TFNami = Template.bind({});
TFNami.args = {
  cardCodes: ['05BW005', '02BW026'],
  regions: ['ShadowIsles', 'Bilgewater'],
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const EliseGoHard = Template.bind({});
EliseGoHard.args = {
  cardCodes: ['01SI053', '03SI016'],
  regions: ['ShadowIsles', 'Noxus'],
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const NoChampionBurn = Template.bind({});
NoChampionBurn.args = {
  cardCodes: [],
  regions: ['PiltoverZaun', 'Noxus'],
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const FeelTheRush = Template.bind({});
FeelTheRush.args = {
  cardCodes: ['03FR006', '01FR039', '03FR022'],
  regions: ['Freljord', 'ShadowIsles'],
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};

export const Ziggs = Template.bind({});
Ziggs.args = {
  cardCodes: ['05BC163'],
  regions: ['BandleCity', 'Shurima'],
  filters: {
    sampleSizeFilters: [],
    serverFilters: [],
    timeFilters: [],
  },
};
