import CheckboxItem from '@/lib-components/CheckboxItem';

export default {
  title: 'Library/CheckboxItem',
  component: CheckboxItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { CheckboxItem },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; display: grid;">
              <CheckboxItem v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: true,
  // icon: '',
  prompt: 'Test',
};

export const Icon = Template.bind({});
Icon.args = {
  modelValue: false,
  icon: 'url("https://lor.gg/images/noxus.svg")',
  prompt: 'Noxus',
};

export const NotEnabled = Template.bind({});
NotEnabled.args = {
  modelValue: false,
  prompt: 'Test',
};
