import ProfileChampionRow from '@/lib-components/ProfileChampionRow';

export default {
  title: 'Library/ProfileChampionRow',
  component: ProfileChampionRow,
  argTypes: {},
};

const Template = (args) => ({
  components: { ProfileChampionRow },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px; height: 60px;"> 
              <ProfileChampionRow v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  cardCode: '01IO001',
  wins: 20,
  matches: 50,
};
