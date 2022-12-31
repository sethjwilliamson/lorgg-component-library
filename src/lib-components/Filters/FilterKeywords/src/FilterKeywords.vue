<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('general.keywords')"
    @clear:filter-array="onClear"
  >
    <MultiSelect
      v-model="filterArray"
      :placeholder="t('general.keywords')"
      class="runeterra-select"
      mode="tags"
      :options="keywords"
      :searchable="true"
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
import { FilterKeywordsProps, filterKeywordsProps } from './types';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import { useJsonStore } from '@/helpers/stores';
const { t } = useI18n();

const props: FilterKeywordsProps = defineProps(filterKeywordsProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: string[]): void;
}>();

const filterArray = ref(props.filterArray);
const keywords = useJsonStore().jsons.dataJson.keywords.filter(
  (x) => x.showInFilter,
);

watch(filterArray, () => {
  emit('update:filterArray', filterArray.value);
});

function onClear() {
  filterArray.value.splice(0);
}
</script>

<style scoped></style>
