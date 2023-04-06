import { getRandomInt } from '@/helpers/functions';
import DashboardLeaderboardTable from '@/lib-components/DashboardLeaderboardTable';

export default {
  title: 'Library/DashboardLeaderboardTable',
  component: DashboardLeaderboardTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { DashboardLeaderboardTable },
  setup() {
    return { args };
  },
  data() {
    return {
      selectedRegion: args.selectedRegion,
    };
  },
  template: `<div style="width: 360px"> 
              <DashboardLeaderboardTable v-bind="args" v-model:selectedRegion="selectedRegion" />
              {{ selectedRegion }}
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  selectedRegion: 'americas',
  rows: [
    '06RU026',
    '02DE002',
    '06DE021',
    '03NX007',
    '02NX007',
    '03MT087',
    '02BW026',
  ].map((x, index) => {
    return {
      name: 'string',
      id: getRandomInt(1, 2000),
      rank: index + 1,
      matches: getRandomInt(1, 2000),
      lp: getRandomInt(1, 2000),
      change: getRandomInt(-200, 400),
      selectedBannerCard: x,
    };
  }),
};

export const NoSelectedBanners = Template.bind({});
NoSelectedBanners.args = {
  rows: [
    '06RU026',
    '02DE002',
    '06DE021',
    '03NX007',
    '02NX007',
    '03MT087',
    '02BW026',
  ].map((x, index) => {
    return {
      name: 'string',
      id: getRandomInt(1, 2000),
      rank: index + 1,
      matches: getRandomInt(1, 2000),
      lp: getRandomInt(1, 2000),
      change: getRandomInt(-200, 400),
    };
  }),
};
