<template>
  <SidePanelSectionPane
    :filter-array="props.filterArray"
    :title="t('general.regions')"
    @clear:filter-array="onClear"
  >
    <div class="checkboxes-container">
      <CheckboxItem
        v-for="region of regions"
        :key="region.nameRef"
        :icon="`url(${region.icon})`"
        :prompt="region.name"
        :is-selected="props.filterArray.includes(region.nameRef)"
        @update:is-selected="onUpdate(region.nameRef)"
      />
      <CheckboxItem
        class="runeterra"
        :prompt="'Runeterra'"
        :is-selected="props.filterArray.includes('Runeterra')"
        @update:is-selected="onUpdate('Runeterra')"
      />

      <MultiSelect
        v-if="props.filterArray.includes('Runeterra')"
        v-model="selectedRuneterraChampions"
        class="runeterra-select"
        mode="tags"
        :options="runeterraChampions"
        label="name"
        value-prop="nameRef"
      />
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import { FilterProps, filterProps } from './types';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane/src/SidePanelSectionPane.vue';
import { useJsonStore } from '@/helpers/stores';
import CheckboxItem from '@/lib-components/CheckboxItem/src/CheckboxItem.vue';
import MultiSelect from '@vueform/multiselect';
import { Ref, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: FilterProps = defineProps(filterProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<string>): void;
}>();

const selectedRuneterraChampions: Ref<Array<string>> = ref([]);
const selectedRegionsArray: Ref<Array<string>> = ref([]);

const regions = useJsonStore().jsons.dataJson.regions;
const runeterraChampions = useJsonStore().jsons.dataJson.runeterraChampions;

watch(selectedRuneterraChampions, () => {
  emitFilterUpdate();
});

function onUpdate(prompt: string) {
  if (selectedRegionsArray.value.includes(prompt)) {
    selectedRegionsArray.value = selectedRegionsArray.value.filter(
      (x) => x !== prompt,
    );
  } else {
    selectedRegionsArray.value = [...selectedRegionsArray.value, prompt];
  }

  emitFilterUpdate();
}

function emitFilterUpdate() {
  console.log(selectedRuneterraChampions);
  if (!selectedRegionsArray.value.includes('Runeterra')) {
    emit('update:filterArray', [...selectedRegionsArray.value]);
    return;
  }

  emit('update:filterArray', [
    ...selectedRegionsArray.value,
    ...selectedRuneterraChampions.value,
  ]);
}

function onClear() {
  selectedRuneterraChampions.value = [];
  selectedRegionsArray.value = [];
  emit('update:filterArray', []);
}
</script>

<style scoped>
.checkboxes-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.runeterra,
.runeterra-select {
  grid-column: span 2;
  height: 45px;
}
</style>
