<template>
  <!-- TODO: Translate -->
  <SidePanelSectionPane
    :filter-array="props.filterArray"
    :title="'Mana Cost'"
    @clear:filter-array="onClear"
  >
    <div class="checkbox-rows-container">
      <div class="top-row checkbox-items-container">
        <CheckboxItemManaCost
          v-for="i in topRowRange"
          :key="i"
          class="checkbox-item-mana-cost"
          :prompt="i"
          :is-selected="props.filterArray.includes(i)"
          @update:is-selected="onUpdate(i)"
        ></CheckboxItemManaCost>
      </div>
      <div class="bottom-row checkbox-items-container">
        <CheckboxItemManaCost
          v-for="i in bottomRowRange"
          :key="i"
          class="checkbox-item-mana-cost"
          :prompt="i"
          :is-selected="props.filterArray.includes(i)"
          @update:is-selected="onUpdate(i)"
        ></CheckboxItemManaCost>
      </div>
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import { FilterProps, filterProps } from './types';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane/src/SidePanelSectionPane.vue';
import CheckboxItemManaCost from '@/lib-components/CheckboxItemManaCost/src/CheckboxItemManaCost.vue';

const props: FilterProps = defineProps(filterProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<any>): void;
}>();

const topRowRange = Array.from(new Array(6), (x, i) => i);
const bottomRowRange = Array.from(new Array(5), (x, i) => i + 6);

function onUpdate(promptNumber: number) {
  let newFilterArray: Array<any>;
  if (props.filterArray.includes(promptNumber)) {
    newFilterArray = props.filterArray.filter((x) => x !== promptNumber);
  } else {
    newFilterArray = [...props.filterArray, promptNumber];
  }

  emit('update:filterArray', newFilterArray);
}

function onClear() {
  emit('update:filterArray', []);
}
</script>

<style scoped>
.checkbox-rows-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkbox-items-container {
  display: grid;
  grid-gap: 8px;
}

.checkbox-items-container.top-row {
  grid-template-columns: repeat(6, 38px);
}

.checkbox-items-container.bottom-row {
  grid-template-columns: repeat(5, 38px);
  margin-top: -4px;
}

.checkbox-item-mana-cost {
  margin: 0;
  width: 100%;
}
</style>
