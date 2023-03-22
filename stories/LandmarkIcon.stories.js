import LandmarkIcon from '@/lib-components/icons/LandmarkIcon';

export default {
  title: 'Library/Icons/LandmarkIcon',
  component: LandmarkIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { LandmarkIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <LandmarkIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
