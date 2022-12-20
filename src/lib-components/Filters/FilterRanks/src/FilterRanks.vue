<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('general.ranks')"
    @clear:filter-array="onClear"
  >
    <div class="checkboxes-container">
      <CheckboxItem
        v-for="rank of ranks"
        :key="rank.nameRef"
        :icon="`url(${rank.icon})`"
        :prompt="rank.name"
        :is-selected="filterArray.includes(rank.nameRef)"
        @update:is-selected="onUpdate(rank.nameRef)"
      />

      <ToggleSwitch
        v-model:selected-option="selectedToggle"
        :options="[t('general.allRanks'), t('general.platPlus')]"
      >
      </ToggleSwitch>
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import { useJsonStore } from '@/helpers/stores';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import { FilterRanksProps, filterRanksProps } from './types';
import { useI18n } from 'vue-i18n';
import { reactive, ref, watch } from 'vue';
import CheckboxItem from '@/lib-components/CheckboxItem';
import ToggleSwitch from '@/lib-components/ToggleSwitch';
const { t } = useI18n();

const props: FilterRanksProps = defineProps(filterRanksProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<string>): void;
}>();

const ranks = useJsonStore().jsons.dataJson.ranks.sort(
  (a, b) => b.order - a.order,
);
const filterArray = reactive(props.filterArray);
const selectedToggle = ref(0);

watch(filterArray, () => {
  emit('update:filterArray', filterArray);
});

watch(selectedToggle, () => {
  if (selectedToggle.value === 0) {
    filterArray.splice(0);
  } else if (selectedToggle.value === 1) {
    filterArray.splice(0);
    filterArray.push('Platinum', 'Diamond', 'Masters');
  }
});

function onClear() {
  filterArray.splice(0);
  selectedToggle.value = 0;
}

function onUpdate(nameRef: string) {
  const index = filterArray.indexOf(nameRef);

  if (index === -1) {
    filterArray.push(nameRef);
    return;
  }

  filterArray.splice(index, 1);
}
</script>

<style scoped>
.toggle-switch {
  height: 45px;
  grid-column: span 2;
}
</style>
