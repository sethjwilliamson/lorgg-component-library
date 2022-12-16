<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('general.sets')"
    @clear:filter-array="onClear"
  >
    <MultiSelect
      v-model="filterArray"
      :placeholder="t('general.sets')"
      class="runeterra-select"
      mode="tags"
      :options="sets"
      label="name"
      value-prop="nameRef"
    >
      <template #tag="{ option, handleTagRemove }">
        <span
          class="multiselect-tag"
          tabindex="-1"
          aria-label="{{option.name}} ❎"
          ><img class="label-icon" :src="option.icon" />
          <span class="multiselect-tag-remove"
            ><span
              class="multiselect-tag-remove-icon"
              @mousedown.prevent="handleTagRemove(option, $event)"
            ></span></span
        ></span>
      </template>

      <template #option="{ option }">
        <img class="label-icon" :src="option.icon" />
        {{ option.name }}
      </template>
    </MultiSelect>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import MultiSelect from '@vueform/multiselect';
import { FilterSetsProps, filterSetsProps } from './types';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import { useJsonStore } from '@/helpers/stores';
const { t } = useI18n();

const props: FilterSetsProps = defineProps(filterSetsProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: string[]): void;
}>();

const filterArray = ref(props.filterArray);
const sets = useJsonStore().jsons.dataJson.sets;

watch(filterArray, () => {
  emit('update:filterArray', filterArray.value);
});

function onClear() {
  filterArray.value.splice(0);
}
</script>

<style scoped></style>
