import { getRandomInt } from '@/helpers/functions';
import ProfileChampionTable from '@/lib-components/ProfileChampionTable';

export default {
  title: 'Library/ProfileChampionTable',
  component: ProfileChampionTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { ProfileChampionTable },
  setup() {
    return { args };
  },
  template: `<div style="width: 360px"> 
              <ProfileChampionTable v-bind="args" />
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
    console.log('index');
    console.log(index);
    return {
      cardCode: x,
      matches: getRandomInt(800, 1600),
      wins: getRandomInt(1, 800),
      index: index,
    };
  }),
};
