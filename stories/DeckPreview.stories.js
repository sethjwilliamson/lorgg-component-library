import DeckPreview from '@/lib-components/DeckPreview';

export default {
  title: 'Library/DeckPreview',
  component: DeckPreview,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckPreview },
  setup() {
    return { args };
  },
  template: `<div > 
              <DeckPreview v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode: 'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU'
};
