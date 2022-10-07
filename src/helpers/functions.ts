import { ObjectWithNumber } from '#/helpers';
import { Deck, CardJsonCard } from '#/jsons';
import { useJsonStore } from '@/helpers/stores';
import { getDeckFromCode } from 'lor-deckcodes-ts';
import { computed, ComputedRef } from 'vue';

function isRegionRuneterran(cardCode: string): boolean {
  return /^\d+$/.test(cardCode[0]);
}

export function getDeckObjectFromCode(deckcode: string): Deck {
  return getDeckFromCode(deckcode).reduce(
    (a, v) => ({ ...a, [v.cardCode]: v.count }),
    {},
  );
}

export function getRegions(deck: Deck): Array<string> {
  let regions: Array<string> = [];
  const store = useJsonStore();

  const cards = Object.keys(deck).map( cardCode => store.jsons.cardJsonObject[cardCode] )

  for (const card of cards) {
    if (card.regionRefs.length === 1) {
      regions.push(card.regionRefs[0]);
    }
  }
  
  // Check to make sure all cards fit into a region
  if (cards.every( x => x.regionRefs.filter( y => regions.includes(y)).length > 0)) {
    return regions;
  }
  
  // In the edge case where a card in a Runeterra region is the only non multi-region card
  // EUBACBQMAIBAEBROHQAAA
  // EIBACBQGDUBAEBROHQAAA
  for (const card of cards) {
    const nonRuneterraRegions = card.regionRefs.filter( x => !isRegionRuneterran(x))

    if (nonRuneterraRegions.length === 1) {
      regions.push(nonRuneterraRegions[0]);
    }
  }

  return regions;
}

export function getRegionsQuantity(deck: Deck, regions?: Array<string>|null): ObjectWithNumber {
  if (!regions) {
    regions = getRegions(deck);
  }

  const store = useJsonStore();
  const returnValue: ObjectWithNumber = {};

  for (const region of regions) {
    returnValue[region] = 0;
  }

  for (const cardCode in deck) {
    const card = store.jsons.cardJsonObject[cardCode];
    returnValue[regionOfCard(card, regions)] += deck[cardCode];
  }

  return returnValue;
}

function regionOfCard(card: CardJsonCard, regions:Array<string>): string {
  for (const regionRef of card.regionRefs) {
    if (regions.includes(regionRef)) {
      return regionRef
    }
  }

  throw new Error("Card's region was unfound.");
}

function addQuantityToObject(
  object: ObjectWithNumber,
  key: string,
  quantity: number,
) {
  if (!(key in object)) {
    object[key] = 0;
  }

  object[key] += quantity;
}

export function propsToCard(
  cardProp?: CardJsonCard,
  cardCodeProp?: string,
): ComputedRef<CardJsonCard> {
  return computed(() => {
    if (cardProp) {
      return cardProp;
    }

    if (!cardCodeProp) {
      throw new Error('CardProp or CardCodeProp must be defined.');
    }

    return useJsonStore().jsons.cardJsonObject[cardCodeProp];
  });
}
