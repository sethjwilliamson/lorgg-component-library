import ProfileDropdown from '@/lib-components/ProfileDropdown';

export default {
  title: 'Library/ProfileDropdown',
  component: ProfileDropdown,
  argTypes: {},
};

const Template = (args) => ({
  components: { ProfileDropdown },
  setup() {
    return { args };
  },
  template: `<div > 
              <ProfileDropdown v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  name: 'Test',
};
