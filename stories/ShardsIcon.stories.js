import ShardsIcon from '@/lib-components/icons/ShardsIcon';

export default {
  title: 'Library/Icons/ShardsIcon',
  component: ShardsIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { ShardsIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px">
              <ShardsIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
