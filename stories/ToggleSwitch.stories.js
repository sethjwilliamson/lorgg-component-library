import ToggleSwitch from '@/lib-components/ToggleSwitch';

export default {
  title: 'Library/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {},
};

const Template = (args) => ({
  components: { ToggleSwitch },
  setup() {
    return { args };
  },
  data() {
    return {
      selectedOption: args.selectedOption,
    };
  },
  template: `<div style="width: 320px; height: 45px;">
              <ToggleSwitch v-bind="args" v-model:selectedOption="selectedOption" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  options: ['test1', 'test2', 'test3'],
  selectedOption: 1,
};
