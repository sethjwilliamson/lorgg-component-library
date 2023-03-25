import LeaderboardDetailRow from '@/lib-components/LeaderboardDetailRow';

export default {
  title: 'Library/LeaderboardDetailRow',
  component: LeaderboardDetailRow,
  argTypes: {},
};

const Template = (args) => ({
  components: { LeaderboardDetailRow },
  setup() {
    return { args };
  },
  template: `<div style="grid-template-columns: repeat(6, 1fr); grid-template-rows: 50px;" class="table large-table" >
              <LeaderboardDetailRow v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  index: 1,
  name: 'RattlingBones',
  lp: 165,
  rank: 193,
  change: 0,
  server: 'americas',
  user_id: 8821,
  updated_at: '2023-03-25T04:02:19.000000Z',
  wins: 1962,
  matches: 3435,
  favorite_deck:
    'CECACBABBYBACAIDBQBAGAIGCYBQCBIBDUUAGAIEAEFAGAIBCQTTEAYBAUHRSIICAEAQCAIBAUCQG',
  selected_banner_card: null,
  selected_banner_color: null,
};

export const Player2 = Template.bind({});
Player2.args = {
  index: 1,
  name: 'patin',
  lp: 25,
  rank: 2846,
  change: -20,
  server: 'americas',
  user_id: 4151,
  updated_at: '2023-03-25T05:01:56.000000Z',
  wins: 709,
  matches: 1231,
  favorite_deck:
    'CMBQCAICBQCAIB25QAAYEAMKAEDAEAQDAUDAQCIKAIAQCARRAIBQECIUAEAQIB3Z',
  selected_banner_card: '06RU006',
  selected_banner_color: null,
};
export const Player3 = Template.bind({});
Player3.args = {
  index: 1,
  name: 'Jaseh',
  lp: 15,
  rank: 3771,
  change: 0,
  server: 'americas',
  user_id: 3881,
  updated_at: '2023-03-25T05:02:02.000000Z',
  wins: 681,
  matches: 1485,
  favorite_deck:
    'CIDACAIFFAAQIBQIAECAKDYBAUDAUAYCAUDQQCQGAIDBOHI6EYWC6AABAEBAMNI',
  selected_banner_card: null,
  selected_banner_color: '20,65,70',
};
export const Player4 = Template.bind({});
Player4.args = {
  index: 1,
  name: 'HellLemons',
  lp: 30,
  rank: 2445,
  change: 15,
  server: 'americas',
  user_id: 1097,
  updated_at: '2023-03-25T05:01:53.000000Z',
  wins: 1575,
  matches: 2933,
  favorite_deck:
    'CIBQCBAFBMBAGBIDAYDAGCJDHBEVQWK6AMAQCBJPAECASDYCAMCQEBIDAEAQKAYBAMCQIAYDBEG5QAOZAE',
  selected_banner_card: '02IO003',
  selected_banner_color: '20,65,70',
};
