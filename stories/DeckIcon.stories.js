import DeckIcon from '@/lib-components/icons/DeckIcon';

export default {
  title: 'Library/Icons/DeckIcon',
  component: DeckIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckIcon },
  setup() {
    return { args };
  },

  template: `<div style="width: 320px; color: red;">
              <DeckIcon v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {};
