import { getRandomInt } from '@/helpers/functions';
import ProfileArchetypeTable from '@/lib-components/ProfileArchetypeTable';

export default {
  title: 'Library/ProfileArchetypeTable',
  component: ProfileArchetypeTable,
  argTypes: {},
};

const Template = (args) => ({
  components: { ProfileArchetypeTable },
  setup() {
    return { args };
  },
  template: `<div style="width: 440px"> 
              <ProfileArchetypeTable v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  rows: [
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
    'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
    'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
    'CEEACAYFCABAMAYODQAQEAYJAIAQKKBVAEAQGNYBAMBQ2AIFAUHACBADAIBQEAIFDUYQCBIKO4AQCAZOAIAQGBICAEAQGMY',
    'CQCQCAQDAQAQGBAFAECAGAYEAECDMEJUE4CQCAYPBQUCKAQCAEBAGAYBAMCAWAA',
  ].map((x, index) => {
    return {
      archetypeId: getRandomInt(1, 2000),
      deckCode: x,
      matches: getRandomInt(800, 1600),
      wins: getRandomInt(1, 800),
      index: index,
    };
  }),
};
