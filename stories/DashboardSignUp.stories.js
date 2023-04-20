import DashboardSignUp from '@/lib-components/DashboardSignUp';

export default {
  title: 'Library/DashboardSignUp',
  component: DashboardSignUp,
  argTypes: {},
};

const Template = (args) => ({
  components: { DashboardSignUp },
  setup() {
    return { args };
  },
  template: `<div style="display:grid; width: 360px; height: 500px;" > 
              <DashboardSignUp v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
