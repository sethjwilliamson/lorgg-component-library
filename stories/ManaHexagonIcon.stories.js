import ManaHexagonIcon from '@/lib-components/icons/ManaHexagonIcon';

export default {
  title: 'Library/Icons/ManaHexagonIcon',
  component: ManaHexagonIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { ManaHexagonIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px">
              <ManaHexagonIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
