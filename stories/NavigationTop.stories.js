import NavigationTop from '@/lib-components/NavigationTop';

export default {
  title: 'Library/NavigationTop',
  component: NavigationTop,
  argTypes: {},
};

const Template = (args) => ({
  components: { NavigationTop },
  setup() {
    return { args };
  },
  template: `<div > 
              <NavigationTop v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: false,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isLoggedIn: true,
  name: 'SevTheDev',
};
