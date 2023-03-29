import { getRandomInt } from '@/helpers/functions';
import LeaderboardChart from '@/lib-components/Charts/LeaderboardChart';

export default {
  title: 'Library/Charts/LeaderboardChart',
  component: LeaderboardChart,
  argTypes: {},
};

const Template = (args) => ({
  components: { LeaderboardChart },
  setup() {
    return { args };
  },
  template: `<div style="background-color: var(--color-2)">
              <LeaderboardChart v-bind="args" />
            </div>`,
});

let totalPlayersAmericas = 0;
let totalPlayersApac = 0;
export const TotalPlayers = Template.bind({});
TotalPlayers.args = {
  type: 'totalPlayers',
  server: null,
  data: [
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-08-29 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-08-30 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-08-31 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-01 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-02 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-03 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-04 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-05 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-06 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-07 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-08 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-09 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-10 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-11 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-12 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-13 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-14 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-15 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-08-29 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-08-30 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-08-31 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-01 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-02 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-03 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-04 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-05 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-06 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-07 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-08 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-09 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-10 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-11 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-12 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-13 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-14 00:00:00'),
    },
    {
      server: 'apac',
      players: (totalPlayersApac += getRandomInt(1, 50)),
      date: new Date('2022-09-15 00:00:00'),
    },
  ],
};

totalPlayersAmericas = 0;
export const TotalPlayersServerSelected = Template.bind({});
TotalPlayersServerSelected.args = {
  type: 'totalPlayers',
  server: 'americas',
  data: [
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-08-29 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-08-30 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-08-31 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-01 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-02 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-03 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-04 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-05 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-06 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-07 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-08 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-09 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-10 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-11 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-12 00:00:00'),
    },
    {
      server: 'americas',
      players: (totalPlayersAmericas += getRandomInt(1, 50)),
      date: new Date('2022-09-13 00:00:00'),
    },
  ],
};

const player1 = {
  id: 5,
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
let player1Lp = 0;
let player1Rank = 240;

export const PlayerData = Template.bind({});
PlayerData.args = {
  type: 'lp',
  data: [
    ...new Array(30).fill(undefined).map((x, index) => {
      player1Rank += getRandomInt(-15, 15);
      player1Lp += getRandomInt(-100, 150);

      if (player1Rank < 0) {
        player1Rank = 0;
      }
      if (player1Lp < 0) {
        player1Lp = 0;
      }

      return {
        player: player1,
        lp: player1Lp,
        rank: player1Rank + 1,
        date: new Date(new Date().setDate(new Date().getDate() - (30 - index))),
      };
    }),
  ],
};

const player2 = {
  id: 8,
  name: 'Xeloo',
  lp: 0,
  rank: 5422,
  change: -30,
  server: 'americas',
  user_id: 2259,
  updated_at: '2023-03-25T05:02:13.000000Z',
  wins: 1705,
  matches: 2994,
  favorite_deck:
    'CQCQCAYABYAQKCQ5AIAQACI2AIBQSGZDAMCQSAYFAYBQCAQAAEAQIAACAIBQSM24AQAQCAANAECAAAYBAUEQUAQDBEJVK',
  selected_banner_card: null,
  selected_banner_color: null,
};
let player2Lp = 30;
let player2Rank = 130;
player1Lp = 0;
player1Rank = 240;

export const MultiplePlayerData = Template.bind({});
MultiplePlayerData.args = {
  type: 'lp',
  data: [
    ...new Array(30).fill(undefined).map((x, index) => {
      player1Rank += getRandomInt(-15, 15);
      player1Lp += getRandomInt(-100, 150);

      if (player1Rank < 0) {
        player1Rank = 0;
      }
      if (player1Lp < 0) {
        player1Lp = 0;
      }

      return {
        player: player1,
        lp: player1Lp,
        rank: player1Rank + 1,
        date: new Date(new Date().setDate(new Date().getDate() - (30 - index))),
      };
    }),
    ...new Array(30).fill(undefined).map((x, index) => {
      player2Rank += getRandomInt(-15, 15);
      player2Lp += getRandomInt(-100, 150);

      if (player2Rank < 0) {
        player2Rank = 0;
      }
      if (player2Lp < 0) {
        player2Lp = 0;
      }

      return {
        player: player2,
        lp: player2Lp,
        rank: player2Rank + 1,
        date: new Date(new Date().setDate(new Date().getDate() - (30 - index))),
      };
    }),
  ],
};
