<template>
  <SidePanelSectionPane
    :filter-array="props.filterArray"
    :title="t('general.types')"
    @clear:filter-array="onClear"
  >
    <div class="checkboxes-container">
      <CheckboxItem
        v-for="typeObject of types"
        :key="typeObject.nameRef"
        :icon="`url(${typeObject.icon})`"
        :prompt="typeObject.name"
        :is-selected="filterArray.includes(typeObject.nameRef)"
        @update:is-selected="onUpdate(typeObject.nameRef)"
      />
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import { useJsonStore } from '@/helpers/stores';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import { FilterTypesProps, filterTypesProps } from './types';
import { useI18n } from 'vue-i18n';
import { reactive, watch } from 'vue';
import CheckboxItem from '@/lib-components/CheckboxItem';
const { t } = useI18n();

const props: FilterTypesProps = defineProps(filterTypesProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<string>): void;
}>();

const types = useJsonStore().jsons.dataJson.types.filter((x) =>
  ['Unit', 'Spell', 'Landmark', 'Equipment'].includes(x.nameRef),
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
