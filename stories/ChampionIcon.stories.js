import ChampionIcon from '@/lib-components/icons/ChampionIcon';

export default {
  title: 'Library/Icons/ChampionIcon',
  component: ChampionIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { ChampionIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <ChampionIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
