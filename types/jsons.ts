import { ObjectWithNumber } from './helpers';

export enum FormatEnum {
  Standard = 'client_Formats_Standard_name',
  Eternal = 'client_Formats_Eternal_name',
  CommonsOnly = 'client_Formats_CommonsOnly_name',
  Singleton = 'client_Deckbuilder_RulesFilters_Singleton',
  EvenCost = 'client_Formats_EvenCostCards_name',
}

export type CardJsonCard = {
  artistName: string;
  associatedCardRefs: Array<string>;
  attack: number;
  cardCode: string;
  collectible: true;
  cost: number;
  createdAt: string;
  description: string;
  descriptionRaw: string;
  flavorText: string;
  formats: FormatEnum[];
  health: number;
  keywordRefs: Array<string>;
  keywords: Array<string>;
  levelupDescription: string;
  levelupDescriptionRaw: string;
  name: string;
  rarityRef: 'None' | 'Common' | 'Rare' | 'Epic' | 'Champion';
  regionRefs: Array<string>;
  set: string;
  spellSpeedRef: '' | 'Burst' | 'Fast' | 'Slow';
  subtypeRefs: Array<string>;
  subtypes: Array<string>;
  supertype: '' | 'Champion';
  typeRef: string;
  updatedAt: string;
};

export type CardJson = Array<CardJsonCard>;

export type Deck = ObjectWithNumber;

export type CardJsonObject = { [key: string]: CardJsonCard };

export type DataJsonVocabTerm = {
  description: string;
  name: string;
  nameRef: string;
};

export type DataJsonKeyword = {
  description: string;
  icon: string;
  name: string;
  nameRef: string;
  showInFilter: boolean;
};

export type RegionNameRefs =
  | 'Targon'
  | 'Noxus'
  | 'Demacia'
  | 'Freljord'
  | 'ShadowIsles'
  | 'Ionia'
  | 'Shurima'
  | 'Bilgewater'
  | 'PiltoverZaun'
  | 'BandleCity';

export type DataJsonRegion = {
  abbreviation: string;
  cardCode: string;
  color: string;
  icon: string;
  name: string;
  nameRef: RegionNameRefs;
  order: number;
};

export type DataJsonRank = {
  color: string;
  icon: string;
  name: string;
  nameRef:
    | 'Masters'
    | 'Diamond'
    | 'Platinum'
    | 'Gold'
    | 'Silver'
    | 'Bronze'
    | 'Iron';
  order: number;
};

export enum ServerRegion {
  AMERICAS = 'americas',
  EUROPE = 'europe',
  APAC = 'apac',
}

export type DataJsonServer = {
  abbreviation: string;
  color: string;
  name: string;
  nameRef: ServerRegion;
  order: number;
};

export type DataJsonSpellSpeed = {
  name: string;
  nameRef: 'Slow' | 'Burst' | 'Fast';
};

export type DataJsonRarity = {
  color: string;
  cost: number;
  icon: string;
  name: string;
  order: number;
  nameRef: 'Common' | 'Rare' | 'Epic' | 'Champion' | 'None';
};
export type TypeRef =
  | 'Champion'
  | 'Follower'
  | 'Unit'
  | 'Spell'
  | 'Landmark'
  | 'Ability'
  | 'Equipment';

export type DataJsonType = {
  color: string;
  icon: string;
  name: string;
  order: number;
  nameRef: TypeRef;
};

export type DataJsonSet = {
  icon: string;
  name: string;
  nameRef: string;
};

export type DataJsonPatch = {
  endTime: string;
  name: string;
  nameRef: string;
  startTime: string;
};

export type DataJsonSeason = {
  endTime: string;
  name: string;
  nameRef: string;
  startTime: string;
};

export type DataJsonRuneterraChampion = {
  abbreviation: string;
  cardCode: string;
  color: string;
  icon: string;
  name: string;
  nameRef: string;
  order: number;
};

export type DataJsonFormat = {
  abbreviation: string;
  color: string;
  name: string;
  nameRef: FormatEnum;
  order: number;
};

export type DataJson = {
  keywords: Array<DataJsonKeyword>;
  patches: Array<DataJsonPatch>;
  ranks: Array<DataJsonRank>;
  rarities: Array<DataJsonRarity>;
  regions: Array<DataJsonRegion>;
  runeterraChampions: Array<DataJsonRuneterraChampion>;
  seasons: Array<DataJsonSeason>;
  servers: Array<DataJsonServer>;
  sets: Array<DataJsonSet>;
  spellSpeeds: Array<DataJsonSpellSpeed>;
  types: Array<DataJsonType>;
  vocabTerms: Array<DataJsonVocabTerm>;
  formats: Array<DataJsonFormat>;
};
