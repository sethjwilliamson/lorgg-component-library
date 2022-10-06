import { CardJson, CardJsonObject, DataJson } from '#/jsons';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useJsonStore = defineStore('jsons', () => {
  const jsons = ref({
    cardJson: [] as CardJson,
    cardJsonObject: {} as CardJsonObject,
    dataJson: {
      vocabTerms: [],
      keywords: [],
      regions: [],
      ranks: [],
      servers: [],
      spellSpeeds: [],
      rarities: [],
      sets: [],
      types: [],
      patches: [],
      seasons: [],
      runeterraChampions: [],
    } as DataJson,
  });

  function updateCardJson(cardJson: CardJson) {
    jsons.value.cardJson = cardJson;
  }

  function updateDataJson(dataJson: DataJson) {
    jsons.value.dataJson = dataJson;
  }

  function updateCardJsonObject(cardJsonObject: CardJsonObject) {
    jsons.value.cardJsonObject = cardJsonObject;
  }

  return {
    jsons,
    updateCardJson,
    updateCardJsonObject,
    updateDataJson,
  };
});
