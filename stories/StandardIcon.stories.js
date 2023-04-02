import StandardIcon from '@/lib-components/icons/StandardIcon';

export default {
  title: 'Library/Icons/StandardIcon',
  component: StandardIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { StandardIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <StandardIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
