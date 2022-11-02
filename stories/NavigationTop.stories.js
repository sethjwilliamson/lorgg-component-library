import NavigationTop from '@/lib-components/NavigationTop';
console.log(1);
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
  template: `<div>
              <NavigationTop v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
