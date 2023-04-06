import { getRandomInt } from '@/helpers/functions';
import ProfileRegionTable from '@/lib-components/ProfileRegionTable';

export default {
  title: 'Library/ProfileRegionTable',
  component: ProfileRegionTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { ProfileRegionTable },
  setup() {
    return { args };
  },
  template: `<div style="width: 360px"> 
              <ProfileRegionTable v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  rows: [
    'Targon',
    'Noxus',
    'Demacia',
    'Freljord',
    'ShadowIsles',
    'Ionia',
    'Shurima',
    'Bilgewater',
    'PiltoverZaun',
    'BandleCity',
  ].map((x, index) => {
    return {
      regionNameRef: x,
      matches: getRandomInt(800, 1600),
      wins: getRandomInt(1, 800),
      index: index,
    };
  }),
};
