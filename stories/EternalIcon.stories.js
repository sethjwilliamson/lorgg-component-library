import EternalIcon from '@/lib-components/icons/EternalIcon';

export default {
  title: 'Library/Icons/EternalIcon',
  component: EternalIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { EternalIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <EternalIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
