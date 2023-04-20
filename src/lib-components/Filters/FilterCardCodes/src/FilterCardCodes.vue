<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('cards.cards')"
    @clear:filter-array="onClear"
  >
    <CardMultiselect
      v-model:cardCodes="filterArray"
      mode="tags"
      :filter-callback="filterCallback"
    />
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import { FilterCardCodesProps, filterCardCodesProps } from './types';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import CardMultiselect from '@/lib-components/CardMultiselect';
import { CardJsonCard } from '#/jsons';
const { t } = useI18n();

const props: FilterCardCodesProps = defineProps(filterCardCodesProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: string[]): void;
}>();

const filterArray = ref(props.filterArray);

watch(filterArray, () => {
  console.log('watch(filterArray)', filterArray.value);
  emit('update:filterArray', filterArray.value);
});

function onClear() {
  filterArray.value.splice(0);
}

function filterCallback(x: CardJsonCard) {
  return x.collectible;
}
</script>
