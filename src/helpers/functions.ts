import { ObjectWithNumber } from '#/helpers';
import { Deck, CardJsonCard } from '#/jsons';
import { useJsonStore } from '@/helpers/stores';
import { getDeckFromCode } from 'lor-deckcodes-ts';
import { computed, ComputedRef } from 'vue';

export function isRegionRuneterran(cardCode: string): boolean {
  return /^\d+$/.test(cardCode[0]);
}

export function isAChampion(card: CardJsonCard): boolean {
  return card.supertype === 'Champion' && card.typeRef === 'Unit';
}

export function localeNumber(
  num: number,
  decimalPlaces = 0,
  sigDigits?: number,
) {
  return Number(num.toFixed(decimalPlaces)).toLocaleString(undefined, {
    maximumSignificantDigits:
      sigDigits === undefined ? (num > 10_000 ? 3 : 2) : sigDigits,
  });
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

export function getGemsCost(deck: Deck, isPersonal: boolean) {
  if (isPersonal /* && personal deck doesn't exist */) {
    return null;
  }

  const cardJsonObject = useJsonStore().jsons.cardJsonObject;
  const dataJson = useJsonStore().jsons.dataJson;

  let cost = 0;

  for (const cardCode in deck) {
    const addedCost = dataJson.rarities.find(
      (x) => x.nameRef === cardJsonObject[cardCode].rarityRef,
    )?.cost;

    if (addedCost === undefined) {
      continue;
    }

    // TODO: Subtract deck[cardCode] from cardsOwned[cardCode]
    const quantityMissing = isPersonal
      ? Math.max(0, deck[cardCode])
      : deck[cardCode];

    cost += addedCost * quantityMissing;
  }

  return cost;
}

export function getMostImportantCards(
  cards: CardJsonCard[],
  deck: Deck,
  quantity: number,
) {
  const returnCards: CardJsonCard[] = [];
  const importanceFilter = [
    (x: CardJsonCard) => {
      return isAChampion(x);
    },
    (x: CardJsonCard) => {
      return x.typeRef === 'Landmark';
    },
    (x: CardJsonCard) => {
      return x.typeRef === 'Unit';
    },
    (x: CardJsonCard) => {
      return x.typeRef === 'Spell';
    },
    (x: CardJsonCard) => {
      return x.typeRef === 'Equipment';
    },
  ];

  while (returnCards.length < quantity) {
    const filterCardCodes = importanceFilter.shift();

    if (!filterCardCodes) {
      break;
    }

    returnCards.push(
      ...getMostImportantCardsForSection(
        cards.filter(filterCardCodes),
        deck,
        quantity - returnCards.length,
      ),
    );
  }

  return returnCards;
}

function getMostImportantCardsForSection(
  cards: CardJsonCard[],
  deck: Deck,
  quantity: number,
) {
  return cards
    .sort((a, b) => deck[b.cardCode] - deck[a.cardCode])
    .sort((a, b) => b.cost - a.cost)
    .slice(0, quantity);
}

export function getDeckObjectFromCode(deckcode: string): Deck {
  return getDeckFromCode(deckcode).reduce(
    (a, v) => ({ ...a, [v.cardCode]: v.count }),
    {},
  );
}

export function getCardsFromDeck(deck: Deck) {
  const cardJsonObject = useJsonStore().jsons.cardJsonObject;

  return Object.keys(deck)
    .map((x) => cardJsonObject[x])
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => a.cost - b.cost);
}

export function getRegionsFromCode(deckCode: string): Array<string> {
  return getRegionsFromDeck(getDeckObjectFromCode(deckCode));
}

export function getRegionsFromDeck(deck: Deck): Array<string> {
  const store = useJsonStore();

  const cards = Object.keys(deck).map(
    (cardCode) => store.jsons.cardJsonObject[cardCode],
  );

  return getRegions(cards);
}

export function getRegions(cards: CardJsonCard[]): Array<string> {
  const regions: Array<string> = [];

  for (const card of cards) {
    if (card.regionRefs.length === 1 && !regions.includes(card.regionRefs[0])) {
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
  isRgb = false,
) {
  const store = useJsonStore();

  const defaultRegion = `var(${
    store.jsons.dataJson.regions.find((x) => x.nameRef === card.regionRefs[0])
      ?.color || '--color-primary-2'
  }${isRgb ? '-rgb' : ''})`;

  if (card.regionRefs.length === 1 || !regions || regions.length < 2) {
    return defaultRegion;
  }

  for (const region of regions) {
    if (card.regionRefs.includes(region)) {
      return `var(${
        store.jsons.dataJson.regions.find((x) => x.nameRef === region)?.color ||
        '--color-primary-2'
      }${isRgb ? '-rgb' : ''})`;
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
    regions = getRegionsFromDeck(deck);
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
