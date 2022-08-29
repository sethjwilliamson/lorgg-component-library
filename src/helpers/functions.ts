import { ObjectWithNumber } from '#/helpers';
import { Deck } from '#/jsons';
import { useJsonStore } from '@/helpers/stores';
import { getDeckFromCode } from 'lor-deckcodes-ts';

export function getDeckObjectFromCode(deckcode: string) {
  return getDeckFromCode(deckcode).reduce(
    (a, v) => ({ ...a, [v.cardCode]: v.count }),
    {},
  );
}

export function getRegionsQuantity(deck: Deck): ObjectWithNumber {
  const store = useJsonStore();
  const returnValue: ObjectWithNumber = {};

  const cardCodes = Object.keys(deck);
  const runeterraChampsInDeck = store.jsons.dataJson.runeterraChampions.filter(
    (x) => cardCodes.includes(x.nameRef),
  );

  for (const cardCode in deck) {
    const runeterraChampion = runeterraChampsInDeck.find((x) =>
      x.includedCardCodes?.includes(cardCode),
    );

    if (runeterraChampion) {
      addQuantityToObject(
        returnValue,
        runeterraChampion.nameRef,
        deck[cardCode],
      );
      continue;
    }

    const region = store.jsons.dataJson.regions.find(
      (x) => x.nameRef === store.jsons.setJsonObject[cardCode].regionRefs[0],
    );

    if (!region) {
      continue;
    }

    addQuantityToObject(returnValue, region.nameRef, deck[cardCode]);
  }

  return returnValue;
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
