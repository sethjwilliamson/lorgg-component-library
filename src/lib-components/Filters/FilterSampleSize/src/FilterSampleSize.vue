<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('general.sampleSize')"
    @clear:filter-array="onClear"
  >
    <input
      v-model="inputValue"
      :placeholder="t('general.minimumMatches')"
      type="number"
      min="10"
      step="10"
    />
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import { FilterSampleSizeProps, filterSampleSizeProps } from './types';
import { useI18n } from 'vue-i18n';
import { Ref, ref, watch } from 'vue';
const { t } = useI18n();

const props: FilterSampleSizeProps = defineProps(filterSampleSizeProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: number[]): void;
}>();

const filterArray = ref(props.filterArray);
// inputValue will either be an empty string or a number
const inputValue: Ref<string | number> = ref('');
// eslint-disable-next-line @typescript-eslint/no-empty-function
let timer = setTimeout(() => {}, 0);

if (filterArray.value.length > 0) {
  inputValue.value = filterArray.value[0];
}

watch(filterArray, () => {
  emit('update:filterArray', filterArray.value);
});

watch(inputValue, () => {
  // Wait to update filterArray. Wait 1s after inputValue has changed before updating.
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    filterArray.value.splice(0);

    // inputValue should be a number if it is truthy
    if (inputValue.value) {
      filterArray.value.push(inputValue.value as number);
    }
  }, 1000);
});

function onClear() {
  filterArray.value.splice(0);
  inputValue.value = '';
}
</script>

<style scoped>
/* TODO: Move to app.css ? */
input {
  background-color: var(--color-2);
  border-radius: 25px;
  border: none;
  color: var(--color-primary-2);
  font-size: 14px;
  height: 45px;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  width: -webkit-fill-available;
}
</style>
