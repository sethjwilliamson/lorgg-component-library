import SpellIcon from '@/lib-components/icons/SpellIcon';

export default {
  title: 'Library/Icons/SpellIcon',
  component: SpellIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { SpellIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <SpellIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
