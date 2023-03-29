import LeaderboardTop from '@/lib-components/LeaderboardTop';

export default {
  title: 'Library/LeaderboardTop',
  component: LeaderboardTop,
  argTypes: {},
};

const Template = (args) => ({
  components: { LeaderboardTop },
  setup() {
    return { args };
  },
  template: `<div > 
              <LeaderboardTop v-bind="args" />
            </div>`,
});

export const Default = Template.bind({});
Default.args = {
  players: [
    {
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
    },
    {
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
    },
    {
      id: 9,
      name: 'Minasia',
      lp: 0,
      rank: 4612,
      change: 0,
      server: 'americas',
      user_id: 3148,
      updated_at: '2023-03-25T05:02:08.000000Z',
      wins: 982,
      matches: 1676,
      favorite_deck:
        'CQCQCAYCAIAQGBASAECAIEACAECCOLIGAUFG65FGAGTQDLYBYAAQEAIBAQGACBIKFEBACAQGFYBAKCQ2FI',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 12,
      name: 'Chunkzer',
      lp: 63,
      rank: 1284,
      change: 13,
      server: 'americas',
      user_id: 645,
      updated_at: '2023-03-25T05:01:46.000000Z',
      wins: 1201,
      matches: 2158,
      favorite_deck:
        'CECQCAQDBEAQGBARAIAQGLRXAIAQIJBUAMCQIDARDABQCAIEDMAQGAYNAMAQGBBKGMBQCAIED4AQIAYCAECQIBQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 13,
      name: 'MajiinBae',
      lp: 45,
      rank: 1827,
      change: 0,
      server: 'americas',
      user_id: 7052,
      updated_at: '2023-03-25T05:01:49.000000Z',
      wins: 2427,
      matches: 4128,
      favorite_deck:
        'CQBQCAQGFYBAGCJD3EAQMBIKCQQDDJQBW4A5SAICAEBQSMYEAUFBGKERAGYQCAQBAMEVKAQFBLIQDUQB',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 14,
      name: 'ENiamor',
      lp: 20,
      rank: 3126,
      change: 0,
      server: 'americas',
      user_id: 5215,
      updated_at: '2023-03-25T05:01:58.000000Z',
      wins: 1509,
      matches: 2700,
      favorite_deck:
        'CQCACAIEGQAQKBARAICAIBYRAYCQUBBIGGQQDJQBXQAQKAIBAQNQCAQGFYAQGBASAECQVVIBAECQIFIA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 15,
      name: 'Lazyguga',
      lp: 30,
      rank: 2426,
      change: 0,
      server: 'americas',
      user_id: 1901,
      updated_at: '2023-03-25T05:01:53.000000Z',
      wins: 801,
      matches: 1339,
      favorite_deck:
        'CIDQCAYABYAQIAACAECQMAICAIDBMPQCAIAAMCQCAUAAUDADAEAAMCI5AIAQCABTAEBAABYA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 16,
      name: 'leozera',
      lp: 20,
      rank: 3149,
      change: 0,
      server: 'americas',
      user_id: 13972,
      updated_at: '2023-03-25T05:01:58.000000Z',
      wins: 1132,
      matches: 2077,
      favorite_deck:
        'CQBQCBIGAECAKCQHIVE2MAIFAIDAIGRAFU6AGAIEAYFACBIKDIBAEBQSD4BACAQGAIAQIBQO',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 18,
      name: 'Cephalopod',
      lp: 51,
      rank: 1609,
      change: 36,
      server: 'americas',
      user_id: 14663,
      updated_at: '2023-03-25T05:01:48.000000Z',
      wins: 594,
      matches: 1006,
      favorite_deck:
        'CQBQCAQGFYBQGCJDGPMQCBQFBIKCAMNGAG3QDWIBAEBQKCQTFCIQCAQBAMERGAYFBKTQDMIBYYAQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 21,
      name: 'LuserBeam',
      lp: 115,
      rank: 479,
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
      id: 22,
      name: 'mati24mayo',
      lp: 189,
      rank: 144,
      change: 0,
      server: 'apac',
      user_id: 7597,
      updated_at: '2023-03-25T04:02:19.000000Z',
      wins: 1407,
      matches: 2511,
      favorite_deck:
        'CIBQEAQDAMCAGAQGCY5DYBABAMBAYJJIAIAQKBQBAQBAMGRGFU7AGAIBAMXACAQGEAAQGBQG',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 23,
      name: 'FilthyGamerWeeb',
      lp: 135,
      rank: 314,
      change: 0,
      server: 'apac',
      user_id: 4654,
      updated_at: '2023-03-25T05:01:39.000000Z',
      wins: 228,
      matches: 351,
      favorite_deck:
        'CECACBABBYBACAIMGIBACBIBFABQGAIDAYLAGAIEAEGAEAIFCMOQGAIBAEKCOAYBAECRSAIEAEFAEAIBAM2A',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 24,
      name: 'Zorig Dungu',
      lp: 60,
      rank: 1347,
      change: 0,
      server: 'apac',
      user_id: 3538,
      updated_at: '2023-03-25T05:01:46.000000Z',
      wins: 756,
      matches: 1315,
      favorite_deck:
        'CMCACAIABEAQGAAOAECQADAEAQDRINTHQIAQIAIBAANACAQAAEAQIAACAUCAON25NWAADCQBAIAQCAAGAICAODJ3',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 25,
      name: 'NoTapper',
      lp: 15,
      rank: 3340,
      change: 0,
      server: 'apac',
      user_id: 7812,
      updated_at: '2023-03-25T05:01:59.000000Z',
      wins: 1169,
      matches: 1970,
      favorite_deck:
        'CMBACBIHBYDAIBYDBUOCKJTNAIBAKBYHBMCQIBZMGY5UY6IBAUCAOGR6JBMWM',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 26,
      name: '4LW',
      lp: 260,
      rank: 65,
      change: 0,
      server: 'apac',
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
      id: 28,
      name: 'Rusticles',
      lp: 20,
      rank: 3043,
      change: 0,
      server: 'apac',
      user_id: 11301,
      updated_at: '2023-03-25T05:01:57.000000Z',
      wins: 1112,
      matches: 2009,
      favorite_deck:
        'CICACAIFF4AQIBILAQBQKAQDAUDAMAYJEM4ESWCZLQAQCBAJB4BACAYJBUAQGBIE',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 29,
      name: 'Ez2Win',
      lp: 204,
      rank: 125,
      change: 0,
      server: 'apac',
      user_id: 2224,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 1006,
      matches: 1606,
      favorite_deck: 'CMBAIBAEAEBAIBYGAQDQCHBHJVHVGAYBAECDIAIFAQGAGBAHHNWYUAIA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 32,
      name: 'Seku',
      lp: 267,
      rank: 56,
      change: 0,
      server: 'apac',
      user_id: 5239,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 1365,
      matches: 2456,
      favorite_deck:
        'CQCACAQBAIAQGAICAECQCBQHAUFAODRRJGQQDJQBVAAQEAIFAECAEBABBIGAGAIEAEEQCBIK2UAQEAIBAQPA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 35,
      name: 'XxWhatAmIxX',
      lp: 155,
      rank: 223,
      change: 0,
      server: 'apac',
      user_id: 2210,
      updated_at: '2023-03-25T05:01:39.000000Z',
      wins: 1722,
      matches: 2777,
      favorite_deck:
        'CECACBABBYBACAIDBQBAGAIGCYBQCBIBDUUAGAIEAEFAGAIBCQTTEAYBAUHRSIICAEAQCAIBAUCQG',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 36,
      name: 'Sucessor',
      lp: 75,
      rank: 989,
      change: 0,
      server: 'apac',
      user_id: 1770,
      updated_at: '2023-03-25T05:01:44.000000Z',
      wins: 810,
      matches: 1546,
      favorite_deck:
        'CQDACBAECAAQKCSYAECQGDICAMCAKEQDAEBQEEYUAMAQIJZNGQBACAIDBMAQKAYGAMAQGAYPAECQGCIBAUCBI',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 42,
      name: 'Oneiric',
      lp: 500,
      rank: 15,
      change: 0,
      server: 'europe',
      user_id: 6068,
      updated_at: '2023-03-25T04:02:18.000000Z',
      wins: 970,
      matches: 1670,
      favorite_deck:
        'CQCQCAYCAIAQGBASAECAIEAEAECAYJZNGQCQKCTPPCTADLYBYAAQCAICAYXACAQFBI2IQAI',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 44,
      name: 'Iied',
      lp: 205,
      rank: 119,
      change: 0,
      server: 'europe',
      user_id: 502,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 1272,
      matches: 2325,
      favorite_deck:
        'CQBQCAQGFYBAGCJD3EAQKBIKCQQKMANXAHMQCAQBAMETGBQFBIJSQMMRAGTQDMIBAIAQGCITAECQVVIB',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 47,
      name: 'FNX GreedVy',
      lp: 0,
      rank: 4574,
      change: 0,
      server: 'europe',
      user_id: 12639,
      updated_at: '2023-03-25T05:02:08.000000Z',
      wins: 554,
      matches: 1122,
      favorite_deck:
        'CIBQEAQDAMCAIAIDAIGCKKAEAIDBMJR2HQBQCAIDCMAQKBQBAIBAMIB6AIAQEBQ2AEBQMBQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 48,
      name: 'ChronoMirage',
      lp: 15,
      rank: 3733,
      change: 0,
      server: 'europe',
      user_id: 513,
      updated_at: '2023-03-25T05:02:02.000000Z',
      wins: 1310,
      matches: 2234,
      favorite_deck:
        'CQDQCAQAAEAQGAAOAECAAAQBAUFB2AQBAAERUAYDBENSGMYDAUEQGBIGAEAQGCK4AIAQGCITAECQADA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 52,
      name: 'Raygeki',
      lp: 82,
      rank: 897,
      change: 82,
      server: 'europe',
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
      id: 55,
      name: 'Idontca1',
      lp: 15,
      rank: 3380,
      change: -10,
      server: 'europe',
      user_id: 1545,
      updated_at: '2023-03-25T05:01:59.000000Z',
      wins: 2509,
      matches: 4521,
      favorite_deck:
        'CQBQCAQGFYBAGCJD3EAQMBIKCQQJCANGAG3QDWIBAIAQGCJTAMCQUEZR2IAQEAIDBFEQIBIKFCTQDMIBYYAQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 57,
      name: 'Duckie428',
      lp: 95,
      rank: 733,
      change: 0,
      server: 'europe',
      user_id: 3265,
      updated_at: '2023-03-25T05:01:42.000000Z',
      wins: 983,
      matches: 1726,
      favorite_deck:
        'CICQCAIFF4AQICIPAECAKCYEAMETQSK62YAQIAYFAMCAKBQCAEBQSIYBAMCQEAIDAMEQ2WGYAE',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 61,
      name: 'Jacowaco',
      lp: 0,
      rank: 4908,
      change: -35,
      server: 'europe',
      user_id: 559,
      updated_at: '2023-03-25T05:02:10.000000Z',
      wins: 79,
      matches: 151,
      favorite_deck:
        'CICQCAQGDAAQGBQRAECAMDQCAUDAKCYHAMEQSIZIFIZWFVYBAEAQGCKVAIAQEBRGAEBQSWY',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 64,
      name: 'Drisoth',
      lp: 198,
      rank: 130,
      change: 60,
      server: 'europe',
      user_id: 12376,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 2637,
      matches: 4151,
      favorite_deck: 'CMBQCBIEBQCAIBABAICAOBYEA4ARYJ2NJ5JW2AICAQDTXCQBAA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 65,
      name: 'LoverOfPies',
      lp: 110,
      rank: 523,
      change: 0,
      server: 'europe',
      user_id: 5415,
      updated_at: '2023-03-25T05:01:41.000000Z',
      wins: 937,
      matches: 1557,
      favorite_deck:
        'CMBAEBIHBMHAMBAHAMOCKJRWNUBACBIHA4DAIBYNHNEEYZTZAEBAIBY2HY',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 68,
      name: 'Henneky',
      lp: 49,
      rank: 1761,
      change: 34,
      server: 'europe',
      user_id: 5828,
      updated_at: '2023-03-25T05:01:49.000000Z',
      wins: 1689,
      matches: 2870,
      favorite_deck:
        'CQCQCAIEGQAQKCUYAEBACBIBFABAKBILB4CAKBAWDANR6AYBAECBWAICAQEACBIEBQBQCAYEBMAQKBIDAIAQKMJV',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 71,
      name: 'Lumus11',
      lp: 190,
      rank: 138,
      change: -30,
      server: 'americas',
      user_id: 6187,
      updated_at: '2023-03-25T04:02:19.000000Z',
      wins: 2567,
      matches: 4582,
      favorite_deck:
        'CECACBABBYBACAIME4BACBIBFACAGAIDAYFBMBABAECR2AIDAEJQCBABBIBACAIUGQBACAIBAEBACBIPDE',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 72,
      name: 'Kevor24',
      lp: 50,
      rank: 1619,
      change: 0,
      server: 'americas',
      user_id: 791,
      updated_at: '2023-03-25T05:01:48.000000Z',
      wins: 1558,
      matches: 2562,
      favorite_deck:
        'CQBACBIHBYDAIBYDDQSSMNTNAMAQKCWAAEBAKBYHBMDAIBYNDI5UQTDZAEAQIBZ6',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 73,
      name: 'FakeHero',
      lp: 70,
      rank: 1106,
      change: -10,
      server: 'americas',
      user_id: 851,
      updated_at: '2023-03-25T05:01:44.000000Z',
      wins: 2025,
      matches: 3531,
      favorite_deck:
        'CQCQCAYABYAQKCQ5AIAQACI2AIBQSGZDAMCQSAYFAYBQCAQAAEAQIAADAIBQSM24AMAQCAANAIBQSE2VAICQSBAK',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 76,
      name: 'Hawk362',
      lp: 290,
      rank: 43,
      change: 0,
      server: 'americas',
      user_id: 1092,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 1609,
      matches: 2697,
      favorite_deck:
        'CICACAYEAUAQIBAQAMAQIJRHGQCAGCJDJFLNSAIDAEAQIGYBAMCAWAQDBEEVIAYBAICAQAIDAQJAGAYJBVKVY',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 78,
      name: 'GGeov',
      lp: 145,
      rank: 262,
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
      id: 80,
      name: 'Sugoi',
      lp: 136,
      rank: 313,
      change: 16,
      server: 'americas',
      user_id: 10754,
      updated_at: '2023-03-25T05:01:39.000000Z',
      wins: 748,
      matches: 1377,
      favorite_deck:
        'CICQCAQBAIAQGBQIAECAMCQBAUDACBYCAYKCAIJCFU5DYAIDAIDAECZGAEAQCAI5',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 81,
      name: 'Beastllama',
      lp: 0,
      rank: 4609,
      change: 0,
      server: 'americas',
      user_id: 1119,
      updated_at: '2023-03-25T05:02:08.000000Z',
      wins: 2321,
      matches: 3914,
      favorite_deck: 'CMBQCBIEBQCAIBABAICAOBQEA4ARYJ2NJ5JQCAYEA45W3CQBAEAQKBA6',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 82,
      name: 'FNX rodsmtg',
      lp: 125,
      rank: 381,
      change: 0,
      server: 'americas',
      user_id: 7102,
      updated_at: '2023-03-25T05:01:40.000000Z',
      wins: 488,
      matches: 895,
      favorite_deck:
        'CQCQCAYEAMAQIBAHAECQIDACAECCINAFAUFAIKBRUYA3YAIEAEAQIGYBAUFMMAIBAUCBCAQEAQBRCAA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 89,
      name: 'Riot RubinZoo',
      lp: 130,
      rank: 351,
      change: 0,
      server: 'americas',
      user_id: 7329,
      updated_at: '2023-03-25T05:01:39.000000Z',
      wins: 646,
      matches: 1069,
      favorite_deck:
        'CECAEAYEAUJAGAIDAIKCQAYFAMDASDIEAECACJZNGQAQCAQDAMBACAIEEQAQKBAM',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 92,
      name: 'jamesf',
      lp: 45,
      rank: 1823,
      change: 15,
      server: 'americas',
      user_id: 1752,
      updated_at: '2023-03-25T05:01:49.000000Z',
      wins: 2034,
      matches: 3953,
      favorite_deck:
        'CECAEAQDAMCAGAIDAIHSQAYBAUTTKOADAMCQGBAGAIAQIBILAIAQGGJXAEAQCAYM',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 99,
      name: 'Bonjwa',
      lp: 657,
      rank: 5,
      change: 0,
      server: 'americas',
      user_id: 2778,
      updated_at: '2023-03-25T01:01:46.000000Z',
      wins: 245,
      matches: 433,
      favorite_deck:
        'CQCACAYEAUBQKBACAYHAIAIEBAMTIOQEAUFDDJABUYA56AICAEAQIJYBAUFNCAIA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 104,
      name: 'AquaDeiTy',
      lp: 141,
      rank: 285,
      change: 71,
      server: 'americas',
      user_id: 9919,
      updated_at: '2023-03-25T05:01:39.000000Z',
      wins: 1580,
      matches: 2907,
      favorite_deck:
        'CQBQCAQDBEAQGAYNAQCQU5EEAGTADQQBAIAQCAZXBICQUKLKOCGQDGABUEA2GANPAHDADVIBAA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 105,
      name: 'BlitzLen',
      lp: 164,
      rank: 203,
      change: 19,
      server: 'americas',
      user_id: 4924,
      updated_at: '2023-03-25T05:01:39.000000Z',
      wins: 552,
      matches: 880,
      favorite_deck:
        'CQDACAIEGQAQEBAIAEBQIAYBAQCAOAQFAQGBCBQFBICBUKBRUYA3YAICAEBQICYBAUFACAA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 109,
      name: 'hotbread00',
      lp: 0,
      rank: 4951,
      change: 0,
      server: 'americas',
      user_id: 107341,
      updated_at: '2023-03-25T05:02:10.000000Z',
      wins: 110,
      matches: 176,
      favorite_deck: '',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 116,
      name: 'Mafraju',
      lp: 35,
      rank: 2257,
      change: -25,
      server: 'americas',
      user_id: 165,
      updated_at: '2023-03-25T05:01:52.000000Z',
      wins: 2962,
      matches: 5820,
      favorite_deck: 'CMBAIBAGAEBQKDYHAQDRGFRWIFCEUUACAECAORICAQDAIBYBAECAMAQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 125,
      name: 'Puyshpii',
      lp: 40,
      rank: 2084,
      change: 0,
      server: 'americas',
      user_id: 1122,
      updated_at: '2023-03-25T05:01:51.000000Z',
      wins: 489,
      matches: 825,
      favorite_deck: 'CMBAIBAEAEBAIBYGAQDQCHBHJVHVGAYBAECDIAIFAQGAGBAHHNWYUAIA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 126,
      name: 'like2',
      lp: 25,
      rank: 2872,
      change: -20,
      server: 'americas',
      user_id: 1065,
      updated_at: '2023-03-25T05:01:56.000000Z',
      wins: 169,
      matches: 327,
      favorite_deck:
        'CEBQCBABBYBQCBIUFAYQKAIBAEBRIGBSAMAQCBIDAECAKHIBAUCQGBABAUCRAAQBAEER2AQBAUAQ6AQDAUIBE',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 134,
      name: 'Tako Salvaje',
      lp: 230,
      rank: 83,
      change: 0,
      server: 'americas',
      user_id: 1158,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 573,
      matches: 1074,
      favorite_deck:
        'CQDQCAICBMAQCBBEAEBAEAYBAQBA6AIEAQDQCBIKHIAQKAQVAUAQGAQFAECQEBYCAECB6NACAIBAKCQDAEBAYMJZAEAQGAQU',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 136,
      name: 'Erigby',
      lp: 100,
      rank: 664,
      change: 0,
      server: 'americas',
      user_id: 11378,
      updated_at: '2023-03-25T05:01:42.000000Z',
      wins: 957,
      matches: 1578,
      favorite_deck:
        'CMBQEAICBQ4QGAQCAMDAQBAEA43IAAMCAGFACAYBAEBDCAQCAICQSAQEA5OW2AYBAIBAUAIDAIKACBAHBU',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 143,
      name: 'inaeda',
      lp: 30,
      rank: 2473,
      change: 0,
      server: 'americas',
      user_id: 10912,
      updated_at: '2023-03-25T05:01:53.000000Z',
      wins: 884,
      matches: 1657,
      favorite_deck:
        'CQDACAIBAMAQGAICAECQVIIBAIAQKAJIAIBQKAQGAICACCQOAIAQCAJSAMAQKGJBGUBQCAYBAYAQKAIEAMAQKDYTCQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 144,
      name: 'Davebo',
      lp: 245,
      rank: 74,
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
      id: 147,
      name: 'DREvander51',
      lp: 50,
      rank: 1618,
      change: null,
      server: 'americas',
      user_id: 1347,
      updated_at: '2023-03-25T05:01:48.000000Z',
      wins: 1200,
      matches: 2114,
      favorite_deck: '',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 150,
      name: 'Brinster',
      lp: 0,
      rank: 4581,
      change: 0,
      server: 'americas',
      user_id: 11098,
      updated_at: '2023-03-25T05:02:08.000000Z',
      wins: 1013,
      matches: 1900,
      favorite_deck:
        'CQEACAIFAEAQGBIQAECAIBYBAQCQKAIFBKMACAIFAUHQEAIEDM2AEBIEBQMAEAIFAUFQEAIFFA2QGAIBAQSACAYEBMBACBJBGE',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 154,
      name: 'Sirturmund',
      lp: 310,
      rank: 36,
      change: 50,
      server: 'americas',
      user_id: 1315,
      updated_at: '2023-03-25T05:01:38.000000Z',
      wins: 1849,
      matches: 3208,
      favorite_deck:
        'CQBQCAQGFYBAGCJD3EAQOBIKCQQCQMNGAG3QDWIBAIBAGCJT2YAQEBIKCOYQCAQBAMEVKAIFBLIQC',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 159,
      name: 'Sir Pickle',
      lp: 0,
      rank: 4564,
      change: 0,
      server: 'americas',
      user_id: 15777,
      updated_at: '2023-03-25T05:02:08.000000Z',
      wins: 791,
      matches: 1362,
      favorite_deck:
        'CQBQCAIDG4AQEBROBACQUKLUQQAZQANGAGTQDLYBYIAQGAIBAMXACAQDBEBQKCQBYAA4MAIA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 161,
      name: 'Daiguren RISE',
      lp: 90,
      rank: 816,
      change: 0,
      server: 'americas',
      user_id: 8090,
      updated_at: '2023-03-25T05:01:43.000000Z',
      wins: 1508,
      matches: 2701,
      favorite_deck:
        'CQBQEAIEGQ4AGBIKAEY2MAIDAUCBMGA5AUAQCBA3AEBQICYBAQCAOAIFBLKQCBAFAQKRSGQ3AA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 165,
      name: 'Hallane',
      lp: 61,
      rank: 1305,
      change: 21,
      server: 'americas',
      user_id: 189,
      updated_at: '2023-03-25T05:01:46.000000Z',
      wins: 1180,
      matches: 2242,
      favorite_deck:
        'CMBACBIHBYDQIBYDBUOCKJRWNUBAEBIHA4FQKBAHHNEEY6DZAEBAIBZ6MY',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 167,
      name: 'Hexdrinker',
      lp: 35,
      rank: 2246,
      change: 35,
      server: 'americas',
      user_id: 1943,
      updated_at: '2023-03-25T05:01:52.000000Z',
      wins: 932,
      matches: 1708,
      favorite_deck:
        'CQCQCAYABYAQKCQ5AIAQACI2AMBQSGZDGMBQKCIDAUDAGAICAAAQCAYJLQAQIAACAMAQIAADAECQSCQCAMERGVI',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 168,
      name: 'thecupismine',
      lp: 45,
      rank: 1808,
      change: 0,
      server: 'americas',
      user_id: 10963,
      updated_at: '2023-03-25T05:01:49.000000Z',
      wins: 1114,
      matches: 1930,
      favorite_deck: 'CMBAEBIHBMHAOBAHAMGRYJJGGZWQEAIFA4DQKBAHHNEEYZTZAEAQIBZ6',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 169,
      name: 'Roxas',
      lp: 60,
      rank: 1442,
      change: 0,
      server: 'americas',
      user_id: 11727,
      updated_at: '2023-03-25T05:01:47.000000Z',
      wins: 621,
      matches: 1240,
      favorite_deck: 'CQBQCBIGAECQKCQHIVEWBJQBAYBAMBA2D4QC2PACAEBAMJYBAUFBUAA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 171,
      name: 'MF Teneryx',
      lp: 368,
      rank: 28,
      change: 0,
      server: 'americas',
      user_id: 3552,
      updated_at: '2023-03-25T03:01:48.000000Z',
      wins: 1562,
      matches: 2675,
      favorite_deck:
        'CQBACBIHBYDAIBYDDQSSMNTNAIBAKBYHBMDAIBYNDIWDWTDZAIAQKCWAAEBAIBZ6JA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 172,
      name: 'WiinterSun',
      lp: 15,
      rank: 3504,
      change: 0,
      server: 'americas',
      user_id: 1867,
      updated_at: '2023-03-25T05:02:00.000000Z',
      wins: 528,
      matches: 1012,
      favorite_deck:
        'CQCQCAYABYAQKCQ5AIAQACI2AIBQSGZDAMCQSAYFAYBAEAYJGNOAEBAAAIBQGAICAAAQEAIABUHQEAYJCNKQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 175,
      name: 'FuriousPorobear',
      lp: 157,
      rank: 221,
      change: 0,
      server: 'americas',
      user_id: 8673,
      updated_at: '2023-03-25T05:01:39.000000Z',
      wins: 1388,
      matches: 2496,
      favorite_deck:
        'CQCQCAIEFUAQGAIGAECQVGABAECQIGACAQCAUEAFAECQIFQCAEAQGMQCAECBWNACAMAQEAYCAQAQUDAEAEAQCCYBAECCOAIDAQFQCBIEBQ',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 179,
      name: 'Morpice121 TTV',
      lp: 15,
      rank: 3344,
      change: 0,
      server: 'americas',
      user_id: 2965,
      updated_at: '2023-03-25T05:01:59.000000Z',
      wins: 421,
      matches: 672,
      favorite_deck:
        'CMBQCAIEGQCAIBABAICAOBIEA4ARYJ2NJ4BACBIEBQBQIB3ENWFACAQBAQDTWAIFA4LA',
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 181,
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
      selected_banner_card: null,
      selected_banner_color: null,
    },
    {
      id: 182,
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
      selected_banner_color: null,
    },
    {
      id: 185,
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
      selected_banner_card: null,
      selected_banner_color: null,
    },
  ],
};