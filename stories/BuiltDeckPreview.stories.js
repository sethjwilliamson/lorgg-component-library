import BuiltDeckPreview from '@/lib-components/BuiltDeckPreview';

export default {
  title: 'Library/BuiltDeckPreview',
  component: BuiltDeckPreview,
  argTypes: {},
};

const Template = (args) => ({
  components: { BuiltDeckPreview },
  setup() {
    return { args };
  },
  template: `<div style="width:320px;"> 
              <BuiltDeckPreview v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckcode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
  deckId: 10,
  userName: 'SevTheDev',
  userId: 10,
  deckName: 'Testing Test',
  updatedAt: new Date('2023-01-01'),
};
