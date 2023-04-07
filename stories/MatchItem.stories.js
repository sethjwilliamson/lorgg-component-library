import MatchItem from '@/lib-components/MatchItem';

export default {
  title: 'Library/MatchItem',
  component: MatchItem,
  argTypes: {},
};

const Template = (args) => ({
  components: { MatchItem },
  setup() {
    return { args };
  },
  template: `<div style="max-width: 700px"> 
              <MatchItem v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  deckCode:
    'CICQCAIDFYBAEBQ2FUBAGBQIB4BAMBQHDYCAEAYBA4EASAYBAIDAIAIDAYDQCBADCYAQCAYDBU',
  gameMode: 'Ranked',
  gameType: 'Standard',
  isAttackingFirst: true,
  isVictory: true,
  opponentDeckCode: 'CUCACBIKYYAQCBQMAEBAMCI5F4EAMCQLB4IRGFI2D4WACAQGBIIBQAA',
  opponentName: 'Test',
  playedAt: new Date('2022-01-01'),
};

export const Defeat = Template.bind({});
Defeat.args = {
  deckCode:
    'CECAIBABAECQUDQEAQDR6LCCJEAQMAI6AEDAOMQDAIAQCFBSAECAOOYBAQAQMAICAQDW26A',
  gameMode: 'Ranked',
  gameType: 'Standard',
  isAttackingFirst: true,
  isVictory: false,
  opponentDeckCode:
    'CEDACBQFEUBQEBQODANAEAIFFAYQEBIGAUFQCBQGDYAQGBQRAMBACBIBF4AQMBQ4AEBAMJQCAEDAMDYBAECQG',
  opponentName: 'Test',
  playedAt: new Date('2023-01-01'),
};
