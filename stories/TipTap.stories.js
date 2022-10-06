import TipTap from '@/lib-components/TipTap';

export default {
  title: 'Library/TipTap',
  component: TipTap,
  argTypes: {},
};

const Template = (args) => ({
  components: { TipTap },
  setup() {
    return { args };
  },
  data() {
    return {
      value: args.modelValue,
    };
  },
  template: `<div>
              <TipTap v-model="value" />
              <div v-html="value">
              </div>
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 'Test',
};
