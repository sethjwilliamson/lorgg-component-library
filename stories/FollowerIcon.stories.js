import FollowerIcon from '@/lib-components/icons/FollowerIcon';

export default {
  title: 'Library/Icons/FollowerIcon',
  component: FollowerIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { FollowerIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <FollowerIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
