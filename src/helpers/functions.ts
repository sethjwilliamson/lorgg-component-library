import { ObjectWithNumber } from '#/helpers';
import { Deck, CardJsonCard } from '#/jsons';
import { useJsonStore } from '@/helpers/stores';
import { getDeckFromCode } from 'lor-deckcodes-ts';
import { computed, ComputedRef } from 'vue';

function isRegionRuneterran(cardCode: string): boolean {
  return /^\d+$/.test(cardCode[0]);
}

export function localeNumber(num: number, decimalPlaces = 0) {
  return Number(num.toFixed(decimalPlaces)).toLocaleString();
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

// https://stackoverflow.com/a/62765924/8329408
export function groupBy<T, K extends keyof any>(arr: T[], key: (i: T) => K) {
  return arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);
}

export function getDeckObjectFromCode(deckcode: string): Deck {
  return getDeckFromCode(deckcode).reduce(
    (a, v) => ({ ...a, [v.cardCode]: v.count }),
    {},
  );
}

export function getRegionsFromCode(deckCode: string): Array<string> {
  return getRegions(getDeckObjectFromCode(deckCode));
}

export function getRegions(deck: Deck): Array<string> {
  const regions: Array<string> = [];
  const store = useJsonStore();

  const cards = Object.keys(deck).map(
    (cardCode) => store.jsons.cardJsonObject[cardCode],
  );

  for (const card of cards) {
    if (card.regionRefs.length === 1) {
      regions.push(card.regionRefs[0]);
    }
  }

  // Check to make sure all cards fit into a region
  if (
    cards.every(
      (x) => x.regionRefs.filter((y) => regions.includes(y)).length > 0,
    )
  ) {
    return regions;
  }

  // In the edge case where a card in a Runeterra region is the only non multi-region card
  // EUBACBQMAIBAEBROHQAAA
  // EIBACBQGDUBAEBROHQAAA
  for (const card of cards) {
    const nonRuneterraRegions = card.regionRefs.filter(
      (x) => !isRegionRuneterran(x),
    );

    if (nonRuneterraRegions.length === 1) {
      regions.push(nonRuneterraRegions[0]);
    }
  }

  return regions;
}

export function getRegionColorOfCard(
  card: CardJsonCard,
  regions?: Array<string> | null,
) {
  const store = useJsonStore();

  const defaultRegion = `var(${
    store.jsons.dataJson.regions.find((x) => x.nameRef === card.regionRefs[0])
      ?.color || '--color-primary-2'
  }-rgb)`;

  if (card.regionRefs.length === 1 || !regions || regions.length < 2) {
    return defaultRegion;
  }

  for (const region of regions) {
    if (card.regionRefs.includes(region)) {
      return `var(${
        store.jsons.dataJson.regions.find((x) => x.nameRef === region)?.color ||
        '--color-primary-2'
      }-rgb)`;
    }
  }

  return defaultRegion;
}

export function getRegionColorOfRegionRef(regionRef: string) {
  return (
    getComputedStyle(document.documentElement).getPropertyValue(
      `--color-${regionRef}`,
    ) ||
    getComputedStyle(document.documentElement).getPropertyValue(
      '--color-primary-2',
    )
  );
}

export function getRegionNameOfRegionRef(regionRef: string) {
  if (isRegionRuneterran(regionRef)) {
    return useJsonStore().jsons.cardJsonObject[regionRef]?.name || 'Runeterra';
  }

  return useJsonStore().jsons.dataJson.regions.find(
    (x) => x.nameRef === regionRef,
  )?.name;
}

export function getRegionsQuantity(
  deck: Deck,
  regions?: Array<string> | null,
): ObjectWithNumber {
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

export function regionOfCard(
  card: CardJsonCard,
  regions: Array<string>,
): string {
  for (const regionRef of card.regionRefs) {
    if (regions.includes(regionRef)) {
      return regionRef;
    }
  }

  throw new Error("Card's region was unfound.");
}

export function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    return;
  }

  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;

  dummy.select();
  document.execCommand('copy');

  document.body.removeChild(dummy);
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

export function setDescription(description: string) {
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', description);
}

export function setTitle(title: string) {
  document.title = title;
}
