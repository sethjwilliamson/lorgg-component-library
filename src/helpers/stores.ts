import { SetJson, SetJsonObject, DataJson } from '#/jsons';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useJsonStore = defineStore('jsons', () => {
  const jsons = ref({
    setJson: [] as SetJson,
    setJsonObject: {} as SetJsonObject,
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

  function updateSetJson(setJson: SetJson) {
    jsons.value.setJson = setJson;
  }

  function updateDataJson(dataJson: DataJson) {
    jsons.value.dataJson = dataJson;
  }

  function updateSetJsonObject(setJsonObject: SetJsonObject) {
    jsons.value.setJsonObject = setJsonObject;
  }

  return {
    jsons,
    updateSetJson,
    updateSetJsonObject,
    updateDataJson,
  };
});
