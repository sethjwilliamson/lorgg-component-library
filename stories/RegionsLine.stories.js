import RegionsLine from '@/lib-components/RegionsLine';

export default {
  title: 'Library/RegionsLine',
  component: RegionsLine,
  argTypes: {},
};

const Template = (args) => ({
  components: { RegionsLine },
  setup() {
    return { args };
  },
  template: `<div > 
              <RegionsLine v-bind="args" style="width: 100%; height: 10px;" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
};
