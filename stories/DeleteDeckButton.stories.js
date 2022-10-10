import DeleteDeckButton from '@/lib-components/Buttons/DeleteDeckButton';

export default {
  title: 'Library/DeleteDeckButton',
  component: DeleteDeckButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeleteDeckButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px;">
              <DeleteDeckButton v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckId:
    'CICQCBIABQBACAA2FUBAMCIEAYBQGCJDGNOAGBIJAMCQ2AYBAIAACAIEAABACBIJAQAQCAIABU',
};
