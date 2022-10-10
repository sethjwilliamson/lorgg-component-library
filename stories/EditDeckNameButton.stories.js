import EditDeckNameButton from '@/lib-components/EditDeckNameButton';

export default {
  title: 'Library/EditDeckNameButton',
  component: EditDeckNameButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { EditDeckNameButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px;">
              <EditDeckNameButton v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckId:
    'CICQCBIABQBACAA2FUBAMCIEAYBQGCJDGNOAGBIJAMCQ2AYBAIAACAIEAABACBIJAQAQCAIABU',
  deckName: 'Test',
};
