import DeckHighlight from '@/lib-components/DeckHighlight';

export default {
  title: 'Library/DeckHighlight',
  component: DeckHighlight,
  argTypes: {},
};

const Template = (args) => ({
  components: { DeckHighlight },
  setup() {
    return { args };
  },
  template: `<div > 
              <DeckHighlight v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
};

export const BardNorra = Template.bind({});
BardNorra.args = {
  deckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
};

export const EmptyString = Template.bind({});
EmptyString.args = {
  deckCode: '',
};
