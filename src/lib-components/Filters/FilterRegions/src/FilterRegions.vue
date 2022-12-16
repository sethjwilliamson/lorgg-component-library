<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('general.regions')"
    @clear:filter-array="onClear"
  >
    <div class="checkboxes-container">
      <CheckboxItem
        v-for="region of regions"
        :key="region.nameRef"
        :icon="`url(${region.icon})`"
        :prompt="region.name"
        :is-selected="filterArray.includes(region.nameRef)"
        @update:is-selected="onUpdate(region.nameRef)"
      />
      <CheckboxItem
        class="runeterra"
        :prompt="'Runeterra'"
        :is-selected="filterArray.includes('Runeterra')"
        @update:is-selected="onUpdate('Runeterra')"
      />

      <MultiSelect
        v-if="filterArray.includes('Runeterra')"
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
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { isRegionRuneterran } from '@/helpers/functions';
const { t } = useI18n();

const props: FilterProps = defineProps(filterProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<string>): void;
}>();

const regions = useJsonStore().jsons.dataJson.regions;
const runeterraChampions = useJsonStore().jsons.dataJson.runeterraChampions;

const filterArray = reactive(props.filterArray);
const selectedRuneterraChampions = ref([] as string[]);

selectedRuneterraChampions.value.push(
  ...filterArray.filter((x) => isRegionRuneterran(x)),
);

watch(filterArray, () => {
  emit('update:filterArray', filterArray);
});

watch(selectedRuneterraChampions, (oldVal, newVal) => {
  let changedString = oldVal.find((x) => !newVal.includes(x));

  if (changedString) {
    return onUpdate(changedString);
  }

  changedString = newVal.find((x) => !oldVal.includes(x));

  if (changedString) {
    return onUpdate(changedString);
  }
});

function onClear() {
  filterArray.splice(0);
  selectedRuneterraChampions.value.slice(0);
}

function onUpdate(nameRef: string) {
  const index = filterArray.indexOf(nameRef);

  if (index === -1) {
    filterArray.push(nameRef);

    if (nameRef === 'Runeterra') {
      filterArray.push(...selectedRuneterraChampions.value);
    }

    return;
  }

  filterArray.splice(index, 1);

  if (nameRef !== 'Runeterra') {
    return;
  }

  for (let i = 0; i < filterArray.length; i++) {
    if (!isRegionRuneterran(filterArray[i])) {
      continue;
    }

    filterArray.splice(i--, 1);
  }
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
