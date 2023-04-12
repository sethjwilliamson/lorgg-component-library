import ProfileGameTypeWinrate from '@/lib-components/ProfileGameTypeWinrate';

export default {
  title: 'Library/ProfileGameTypeWinrate',
  component: ProfileGameTypeWinrate,
  argTypes: {},
};

const Template = (args) => ({
  components: { ProfileGameTypeWinrate },
  setup() {
    return { args };
  },
  template: `<div > 
              <ProfileGameTypeWinrate v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  wins: 3,
  matches: 10,
  gameType: 'Standard - Ranked',
};

export const winrate100 = Template.bind({});
winrate100.args = {
  wins: 10,
  matches: 10,
  gameType: 'Standard - Ranked',
};

export const winrate0 = Template.bind({});
winrate0.args = {
  wins: 0,
  matches: 10,
  gameType: 'Standard - Ranked',
};

export const winrate100Details = Template.bind({});
winrate100Details.args = {
  wins: 10,
  matches: 10,
  gameType: 'Standard - Ranked',
};

export const winrate50Details = Template.bind({});
winrate50Details.args = {
  wins: 5,
  matches: 10,
  gameType: 'Standard - Ranked',
};

export const winrate0Details = Template.bind({});
winrate0Details.args = {
  wins: 0,
  matches: 10,
  gameType: 'Standard - Ranked',
};
