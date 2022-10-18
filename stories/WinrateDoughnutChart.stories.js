import WinrateDoughnutChart from '@/lib-components/Charts/WinrateDoughtnutChart';

export default {
  title: 'Library/WinrateDoughnutChart',
  component: WinrateDoughnutChart,
  argTypes: {},
};

const Template = (args) => ({
  components: { WinrateDoughnutChart },
  setup() {
    return { args };
  },
  template: `<div style="background-color: black">
              <WinrateDoughnutChart v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  matches: 5,
  wins: 3,
};
