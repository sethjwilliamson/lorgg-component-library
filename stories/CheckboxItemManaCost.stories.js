import CheckboxItemManaCost from '@/lib-components/CheckboxItemManaCost';

export default {
  title: 'Library/CheckboxItemManaCost',
  component: CheckboxItemManaCost,
  argTypes: {},
};

const Template = (args) => ({
  components: { CheckboxItemManaCost },
  setup() {
    return { args };
  },

  template: `<div style="width: 50px; display: grid;">
              <CheckboxItemManaCost v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: true,
  // icon: '',
  prompt: 1,
};

export const NotEnabled = Template.bind({});
NotEnabled.args = {
  modelValue: false,
  prompt: 2,
};
