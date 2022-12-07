import { CardJsonCard } from '#/jsons';
import { PropType } from 'vue';

export type CardCodePoints = {
  cardCode: string;
  points: number;
};

export type CardSimilarCardsProps = {
  card: CardJsonCard;
};

export const cardSimilarCardsProps = {
  card: {
    type: Object as PropType<CardJsonCard>,
    required: true,
    default: {
      associatedCardRefs: ['06NX013T1'],
      regionRefs: ['Noxus', '06RU002'],
      attack: 1,
      cost: 2,
      health: 1,
      description:
        "<link=keyword.PlaySkillMark><sprite name=SkillMark><style=Keyword>Play</style></link>: <link=keyword.Stun><sprite name=Stunned><style=Keyword>Stun</style></link> an enemy or if it's already <link=keyword.Stun><sprite name=Stunned><style=Keyword>Stunned</style></link> deal 2 to it instead.",
      descriptionRaw:
        "Play: Stun an enemy or if it's already Stunned deal 2 to it instead.",
      levelupDescription: '',
      levelupDescriptionRaw: '',
      flavorText:
        '"Student: Sydell Kythera\nTeacher: J. Willough\nReport: I am spiderbit on left forearm. Sydell claims a misunderstanding, but his smirk belies his innocence. He is ordered to two weeks additional chores (refectory)."\n- Ravenbloom discipline card',
      artistName: 'Polar Engine',
      name: 'Spell Slinger',
      cardCode: '06NX013',
      keywords: ['Fearsome'],
      keywordRefs: ['Fearsome'],
      spellSpeedRef: '',
      rarityRef: 'Common',
      subtypes: ['SPIDER'],
      subtypeRefs: ['SPIDER'],
      supertype: '',
      typeRef: 'Unit',
      collectible: true,
      set: 'Set6',
      createdAt: '2022-09-09',
      updatedAt: '2022-09-14',
    },
  },
};
