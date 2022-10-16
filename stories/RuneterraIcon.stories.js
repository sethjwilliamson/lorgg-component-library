import RuneterraIcon from '@/lib-components/icons/RuneterraIcon';

export default {
  title: 'Library/Icons/RuneterraIcon',
  component: RuneterraIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { RuneterraIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px">
              <RuneterraIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
