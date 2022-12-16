<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('general.rarities')"
    @clear:filter-array="onClear"
  >
    <div class="checkboxes-container">
      <CheckboxItem
        v-for="rarity of rarities"
        :key="rarity.nameRef"
        :icon="`url(${rarity.icon})`"
        :prompt="rarity.name"
        :is-selected="filterArray.includes(rarity.nameRef)"
        @update:is-selected="onUpdate(rarity.nameRef)"
      />
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import { useJsonStore } from '@/helpers/stores';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import { FilterRaritiesProps, filterRaritiesProps } from './types';
import { useI18n } from 'vue-i18n';
import { reactive, watch } from 'vue';
import CheckboxItem from '@/lib-components/CheckboxItem';
const { t } = useI18n();

const props: FilterRaritiesProps = defineProps(filterRaritiesProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<string>): void;
}>();

const rarities = useJsonStore().jsons.dataJson.rarities.filter(
  (x) => x.nameRef !== 'None',
);
const filterArray = reactive(props.filterArray);

watch(filterArray, () => {
  emit('update:filterArray', filterArray);
});

function onClear() {
  filterArray.splice(0);
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

<style scoped></style>
