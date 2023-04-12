import WinsLossesLine from '@/lib-components/WinsLossesLine';

export default {
  title: 'Library/WinsLossesLine',
  component: WinsLossesLine,
  argTypes: {},
};

const Template = (args) => ({
  components: { WinsLossesLine },
  setup() {
    return { args };
  },
  template: `<div > 
              <WinsLossesLine v-bind="args" style="width: 100%; height: 10px;" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  wins: 3,
  matches: 10,
  showDetails: false,
};

export const winrate100 = Template.bind({});
winrate100.args = {
  wins: 10,
  matches: 10,
  showDetails: false,
};

export const winrate0 = Template.bind({});
winrate0.args = {
  wins: 0,
  matches: 10,
  showDetails: false,
};

export const winrate100Details = Template.bind({});
winrate100Details.args = {
  wins: 10,
  matches: 10,
  showDetails: true,
};

export const winrate50Details = Template.bind({});
winrate50Details.args = {
  wins: 5,
  matches: 10,
  showDetails: true,
};

export const winrate0Details = Template.bind({});
winrate0Details.args = {
  wins: 0,
  matches: 10,
  showDetails: true,
};
