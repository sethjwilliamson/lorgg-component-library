export type AdvancedFilterAttribute =
  | 'attack'
  | 'health'
  | 'cost'
  | 'quantityOwned';
export type AdvancedFilterEquality = '>' | '<' | '=';

export type AdvancedFilter = {
  attribute: AdvancedFilterAttribute;
  equality: AdvancedFilterEquality;
  number: number;
};

export type CardFilters = {
  advancedFilters: AdvancedFilter[];
  keywordFilters: string[];
  manaCostFilters: number[];
  rarityFilters: string[];
  regionFilters: string[];
  setFilters: string[];
  typeFilters: string[];
};

export type DeckFilters = {
  cardFilters: string[];
  regionFilters: string[];
  sampleSizeFilters: number[];
  serverFilters: string[];
  timeFilters: string[];
};
