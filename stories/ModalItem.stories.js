import ModalItem from '@/lib-components/ModalItem';

export default {
  title: 'Library/ModalItem',
  component: ModalItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { ModalItem },
  setup() {
    return { args };
  },
  template: `<div > 
              <ModalItem v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
