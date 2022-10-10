import ColorPicker from '@/lib-components/ColorPicker';

export default {
  title: 'Library/ColorPicker',
  component: ColorPicker,
  argTypes: {},
};

const Template = (args) => ({
  components: { ColorPicker },
  setup() {
    return { args };
  },
  data() {
    return {
      modelValue: args.modelValue,
    };
  },
  template: `<div style="width: 320px; display: grid;">
              <ColorPicker v-model="modelValue" />
              <div>
                {{ modelValue  }}
              </div>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '#ffffff',
};
