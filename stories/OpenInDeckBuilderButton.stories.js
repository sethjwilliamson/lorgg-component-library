import OpenInDeckBuilderButton from '@/lib-components/Buttons/OpenInDeckBuilderButton';

export default {
  title: 'Library/OpenInDeckBuilderButton',
  component: OpenInDeckBuilderButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { OpenInDeckBuilderButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px;">
              <OpenInDeckBuilderButton v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CICQCBIABQBACAA2FUBAMCIEAYBQGCJDGNOAGBIJAMCQ2AYBAIAACAIEAABACBIJAQAQCAIABU',
};
