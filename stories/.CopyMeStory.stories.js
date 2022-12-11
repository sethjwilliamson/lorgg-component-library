import CopyMeComponent from '@/lib-components/CopyMeComponent';

export default {
  title: 'Library/CopyMeComponent',
  component: CopyMeComponent,
  argTypes: {},
};

const Template = (args) => ({
  components: { CopyMeComponent },
  setup() {
    return { args };
  },
  template: `<div > 
              <CopyMeComponent v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
