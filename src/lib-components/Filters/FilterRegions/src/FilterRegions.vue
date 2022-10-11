<template>
  <!-- TODO: Translate -->
  <SidePanelSectionPane
    :filter-array="props.filterArray"
    :title="'Regions'"
    @clear:filter-array="onClear"
  >
    <div class="checkboxes-container">
      <CheckboxItem
        v-for="region of regions"
        :key="region.nameRef"
        :icon="`url(https://lor.gg${region.icon})`"
        :prompt="region.name"
        :is-selected="props.filterArray.includes(region.nameRef)"
        @update:is-selected="onUpdate(region.nameRef)"
      />
      <CheckboxItem
        :prompt="'Runeterra'"
        :is-selected="props.filterArray.includes('Runeterra')"
        @update:is-selected="onUpdate('Runeterra')"
      />
      <CheckboxItem
        v-if="props.filterArray.includes('Runeterra')"
        :prompt="'Test'"
        :is-selected="props.filterArray.includes('Test')"
        @update:is-selected="onUpdate('Test')"
      />
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import { FilterProps, filterProps } from './types';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane/src/SidePanelSectionPane.vue';
import { useJsonStore } from '@/helpers/stores';
import CheckboxItem from '@/lib-components/CheckboxItem/src/CheckboxItem.vue';

const props: FilterProps = defineProps(filterProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<string>): void;
}>();

const regions = useJsonStore().jsons.dataJson.regions;

function onUpdate(prompt: string) {
  let newFilterArray: Array<string>;
  if (props.filterArray.includes(prompt)) {
    newFilterArray = props.filterArray.filter((x) => x !== prompt);
  } else {
    newFilterArray = [...props.filterArray, prompt];
  }

  emit('update:filterArray', newFilterArray);
}

function onClear() {
  emit('update:filterArray', []);
}
</script>

<style scoped>
.checkboxes-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
</style>
