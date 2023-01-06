import OpenArchetypePageButton from '@/lib-components/Buttons/OpenArchetypePageButton';

export default {
  title: 'Library/OpenArchetypePageButton',
  component: OpenArchetypePageButton,
  argTypes: {},
};

const Template = (args) => ({
  components: { OpenArchetypePageButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 320px;">
              <OpenArchetypePageButton v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CICQCBIABQBACAA2FUBAMCIEAYBQGCJDGNOAGBIJAMCQ2AYBAIAACAIEAABACBIJAQAQCAIABU',
};
