import StatisticsPaneContainer from '@/lib-components/StatisticsPaneContainer';

export default {
  title: 'Library/StatisticsPaneContainer',
  component: StatisticsPaneContainer,
  argTypes: {},
};

const Template = (args) => ({
  components: { StatisticsPaneContainer },
  setup() {
    return { args };
  },
  template: `<div > 
              <StatisticsPaneContainer v-bind="args" >
                <div style="height: 360px">
                </div>
              </StatisticsPaneContainer>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  heading: 'Test',
};
