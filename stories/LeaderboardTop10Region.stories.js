import LeaderboardTop10Region from '@/lib-components/LeaderboardTop10Region';

export default {
  title: 'Library/LeaderboardTop10Region',
  component: LeaderboardTop10Region,
  argTypes: {},
};

const Template = (args) => ({
  components: { LeaderboardTop10Region },
  setup() {
    return { args };
  },
  template: `<div style="width: 280px"> 
              <LeaderboardTop10Region v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  players: [
    {
      id: 314,
      name: 'mtucks',
      lp: 20,
      rank: 0,
      change: 0,
      server: 'americas',
      user_id: 854,
      updated_at: '2023-03-25T05:01:57.000000Z',
      wins: 3836,
      matches: 6610,
      favorite_deck:
        'CQDACAIABEAQGAAOAECAAAYBAUFB2AYDBENSGXADAUEQGBIGAMAQCAA2AEBAAAIBAMETGBABAEAA2AIDAAAQCAYJCMAQKCIK',
      selected_banner_card: '05SH014',
      selected_banner_color: null,
    },
    {
      id: 5,
      name: 'RattlingBones',
      lp: 165,
      rank: 1,
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
    },
    {
      id: 13,
      name: 'MajiinBae',
      lp: 45,
      rank: 2,
      change: 0,
      server: 'americas',
      user_id: 7052,
      updated_at: '2023-03-25T05:01:49.000000Z',
      wins: 2427,
      matches: 4128,
      favorite_deck:
        'CQBQCAQGFYBAGCJD3EAQMBIKCQQDDJQBW4A5SAICAEBQSMYEAUFBGKERAGYQCAQBAMEVKAQFBLIQDUQB',
      selected_banner_card: '04BW005',
      selected_banner_color: '20,65,70',
    },
    {
      id: 21,
      name: 'LuserBeam',
      lp: 115,
      rank: 3,
      change: 0,
      server: 'americas',
      user_id: 1020,
      updated_at: '2023-03-25T05:01:40.000000Z',
      wins: 2500,
      matches: 4636,
      favorite_deck:
        'CMBACBADAEDAIBZMJROYAAMCAGFACAQBAEBSUBYEA4ARYO2FMZTW2AQBAEBTIAQEA4PUS',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 26,
      name: '4LW',
      lp: 260,
      rank: 4,
      change: 0,
      server: 'americas',
      user_id: 6399,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 2434,
      matches: 4167,
      favorite_deck:
        'CQEACAIFAEAQGBIQAECAIBYBAQCQKAIFBKMACAIFAUHQEAIEDM2AEBIEBQMAEAIFAUFQEAIFFA2QGAIBAQSACAYEBMBACBJBGE',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 52,
      name: 'Raygeki',
      lp: 82,
      rank: 5,
      change: 82,
      server: 'americas',
      user_id: 1489,
      updated_at: '2023-03-25T05:01:43.000000Z',
      wins: 732,
      matches: 1342,
      favorite_deck:
        'CEDACAYABYAQIAAFAECAKBICAUAASDADAEAAWDY2AMAQKKBMGEBQCAIFFMAQEAABAEBQKBABAEAQABQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 78,
      name: 'GGeov',
      lp: 145,
      rank: 6,
      change: 20,
      server: 'americas',
      user_id: 7157,
      updated_at: '2023-03-25T05:01:39.000000Z',
      wins: 1168,
      matches: 2097,
      favorite_deck:
        'CECACAIEGQAQKAAMAIAQABRKAMCQIFQYDICQCAIEDMAQEAABAEBQADQCAUCBSGYEAEAASGRIFEAQCBIECU',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 144,
      name: 'Davebo',
      lp: 245,
      rank: 7,
      change: -10,
      server: 'americas',
      user_id: 38,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 3499,
      matches: 6065,
      favorite_deck:
        'CECACBABBYBACAIME4BACBIBFABQGAIGBILAIAIEAEFAEAIBCQ2AEAIFB4OQEAYBAMJQEAIBAEAQCAIFDE',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 216,
      name: 'KevinLoR',
      lp: 15,
      rank: 8,
      change: 0,
      server: 'americas',
      user_id: 1607,
      updated_at: '2023-03-25T05:02:01.000000Z',
      wins: 829,
      matches: 1669,
      favorite_deck:
        'CQCQCAYCAIAQGBASAECAIEADAECAYLJUAQCQU35GAGXQDQABAMAQCBBHAEBAMLQCAUFHRNYBAIAQCBABAECQVCAB',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 276,
      name: 'Vicster',
      lp: 35,
      rank: 9,
      change: 0,
      server: 'americas',
      user_id: 2645,
      updated_at: '2023-03-25T05:01:52.000000Z',
      wins: 411,
      matches: 684,
      favorite_deck:
        'CMBQEAIFFAYQEBAFGY3QGBAHGZTW2BABAUDQWAQBAUARSAYEA45UY6IDAQCQGEBVAEAQIBYB',
      selected_banner_card: null,
      selected_banner_color: null,
    },
  ],
};
