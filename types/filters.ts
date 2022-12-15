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
  regionFilters: string[];
  manaCostFilters: number[];
  typeFilters: string[];
  rarityFilters: string[];
};
