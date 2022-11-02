import ZoomSlider from '@/lib-components/ZoomSlider';

export default {
  title: 'Library/ZoomSlider',
  component: ZoomSlider,
  argTypes: {},
};

const Template = (args) => ({
  components: { ZoomSlider },
  setup() {
    return { args };
  },
  data() {
    return {
      modelValue: args.modelValue,
    };
  },
  template: `<div style="width: 320px; display: grid;">
              <ZoomSlider v-model="modelValue" />
              <div>
                {{ modelValue  }}
              </div>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '5',
};
