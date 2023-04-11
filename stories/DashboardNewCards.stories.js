import { getRandomInt } from '@/helpers/functions';
import DashboardNewCards from '@/lib-components/DashboardNewCards';

export default {
  title: 'Library/DashboardNewCards',
  component: DashboardNewCards,
  argTypes: {},
};

const Template = (args) => ({
  components: { DashboardNewCards },
  setup() {
    return { args };
  },
  template: `<div style="display: grid; width: 100%;"> 
              <DashboardNewCards v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCodes: [
    '06RU026',
    '02DE002',
    '06DE021',
    '03NX007',
    '02NX007',
    '03MT087',
    '02BW026',
  ],
};
