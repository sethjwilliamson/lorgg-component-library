import UpdateDeckPrivacyButton from '@/lib-components/Buttons/UpdateDeckPrivacyButton';

export default {
  title: 'Library/UpdateDeckPrivacyButton',
  component: UpdateDeckPrivacyButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { UpdateDeckPrivacyButton },
  setup() {
    return { args };
  },
  data() {
    return {
      deckIsPrivate: args.deckIsPrivate,
    };
  },
  template: `<div style="width: 320px;">
              <UpdateDeckPrivacyButton v-bind="args" v-model:deckIsPrivate="deckIsPrivate" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckId: 250,
  deckIsPrivate: true,
};
