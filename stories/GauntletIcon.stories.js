import GauntletIcon from '@/lib-components/icons/GauntletIcon';

export default {
  title: 'Library/Icons/GauntletIcon',
  component: GauntletIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { GauntletIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <GauntletIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
