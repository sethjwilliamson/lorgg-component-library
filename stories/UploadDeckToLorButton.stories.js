import UploadDeckToLorButton from '@/lib-components/Buttons/UploadDeckToLorButton';

export default {
  title: 'Library/UploadDeckToLorButton',
  component: UploadDeckToLorButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { UploadDeckToLorButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px;">
              <UploadDeckToLorButton v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CICQCBIABQBACAA2FUBAMCIEAYBQGCJDGNOAGBIJAMCQ2AYBAIAACAIEAABACBIJAQAQCAIABU',
  deckName: 'Test',
};
