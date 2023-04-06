import { getRandomInt } from '@/helpers/functions';
import DashboardCardTable from '@/lib-components/DashboardCardTable';

export default {
  title: 'Library/DashboardCardTable',
  component: DashboardCardTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { DashboardCardTable },
  setup() {
    return { args };
  },
  template: `<div style="width: 360px"> 
              <DashboardCardTable v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
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
      cardCode: x,
      matches: getRandomInt(800, 1600),
      wins: getRandomInt(1, 800),
      index: index,
    };
  }),
};
