import InfoIcon from '@/lib-components/icons/InfoIcon';

export default {
  title: 'Library/InfoIcon',
  component: InfoIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { InfoIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px">
              <InfoIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
