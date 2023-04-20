<template>
  <div>
    <div @click="onClear">CLEAR ALL</div>
    <FilterRegions v-model:filter-array="filters.regionFilters"></FilterRegions>
    <FilterCardCodes
      v-model:filter-array="filters.cardFilters"
    ></FilterCardCodes>
    <FilterSampleSize
      v-model:filter-array="filters.sampleSizeFilters"
    ></FilterSampleSize>
    <FilterTime v-model:filter-array="filters.timeFilters"></FilterTime>
    <FilterServers v-model:filter-array="filters.serverFilters"></FilterServers>
  </div>
</template>

<script setup lang="ts">
import { DeckFilters } from '#/filters';
import FilterRegions from '@/lib-components/Filters/FilterRegions';
import { reactive, watch } from 'vue';
import { FilterDecksProps, filterDecksProps } from './types';
import FilterCardCodes from '../../FilterCardCodes';
import FilterSampleSize from '../../FilterSampleSize';
import FilterTime from '../../FilterTime';
import FilterServers from '../../FilterServers';

const props: FilterDecksProps = defineProps(filterDecksProps);
const emit = defineEmits<{
  (e: 'update:filters', value: DeckFilters): void;
}>();

const filters = reactive(props.filters);

watch(filters, () => {
  emit('update:filters', filters);
});

function onClear() {
  for (const [, value] of Object.entries(filters)) {
    value.splice(0);
  }
}
</script>
