import CopyDeckButton from '@/lib-components/CopyDeckButton';

export default {
  title: 'Library/CopyDeckButton',
  component: CopyDeckButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { CopyDeckButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px;">
              <CopyDeckButton v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CICQCBIABQBACAA2FUBAMCIEAYBQGCJDGNOAGBIJAMCQ2AYBAIAACAIEAABACBIJAQAQCAIABU',
};
