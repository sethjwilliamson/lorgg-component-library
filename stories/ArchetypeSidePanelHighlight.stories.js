import ArchetypeSidePanelHighlight from '@/lib-components/ArchetypeSidePanelHighlight';

export default {
  title: 'Library/ArchetypeSidePanelHighlight',
  component: ArchetypeSidePanelHighlight,
  argTypes: {},
};

const Template = (args) => ({
  components: { ArchetypeSidePanelHighlight },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px;"> 
              <ArchetypeSidePanelHighlight v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCodes: ['02BW026', '02NX007'],
  regions: ['Bilgewater', 'Noxus'],
};

export const BardNorra = Template.bind({});
BardNorra.args = {
  cardCodes: ['06BC015', '06RU001'],
  regions: ['BandleCity', '06RU001'],
};

export const Thralls = Template.bind({});
Thralls.args = {
  cardCodes: ['04FR005', '04SH073'],
  regions: ['Freljord', 'Shurima'],
};

export const TFNami = Template.bind({});
TFNami.args = {
  cardCodes: ['05BW005', '02BW026'],
  regions: ['ShadowIsles', 'Bilgewater'],
};

export const EliseGoHard = Template.bind({});
EliseGoHard.args = {
  cardCodes: ['01SI053', '03SI016'],
  regions: ['ShadowIsles', 'Noxus'],
};

export const NoChampionBurn = Template.bind({});
NoChampionBurn.args = {
  cardCodes: [],
  regions: ['PiltoverZaun', 'Noxus'],
};

export const FeelTheRush = Template.bind({});
FeelTheRush.args = {
  cardCodes: ['03FR006', '01FR039', '03FR022'],
  regions: ['Freljord', 'ShadowIsles'],
};

export const Ziggs = Template.bind({});
Ziggs.args = {
  cardCodes: ['05BC163'],
  regions: ['BandleCity', 'Shurima'],
};
