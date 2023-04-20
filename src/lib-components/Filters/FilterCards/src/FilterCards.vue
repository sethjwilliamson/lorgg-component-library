<template>
  <div>
    <div @click="onClear">CLEAR ALL</div>
    <FilterManaCost v-model:filter-array="filters.manaCostFilters">
    </FilterManaCost>
    <FilterRegions v-model:filter-array="filters.regionFilters"></FilterRegions>
    <FilterTypes v-model:filter-array="filters.typeFilters"></FilterTypes>
    <FilterRarities
      v-model:filter-array="filters.rarityFilters"
    ></FilterRarities>
    <FilterSets v-model:filter-array="filters.setFilters"></FilterSets>
    <FilterKeywords
      v-model:filter-array="filters.keywordFilters"
    ></FilterKeywords>
    <FilterAdvanced
      v-model:filter-value="filters.advancedFilters"
    ></FilterAdvanced>
  </div>
</template>

<script setup lang="ts">
import { CardFilters } from '#/filters';
import FilterKeywords from '@/lib-components/Filters/FilterKeywords';
import FilterRarities from '@/lib-components/Filters/FilterRarities';
import FilterAdvanced from '@/lib-components/Filters/FilterAdvanced';
import FilterRegions from '@/lib-components/Filters/FilterRegions';
import FilterSets from '@/lib-components/Filters/FilterSets';
import FilterTypes from '@/lib-components/Filters/FilterTypes';
import { reactive, watch } from 'vue';
import FilterManaCost from '../../FilterManaCost';
import { FilterCardsProps, filterCardsProps } from './types';

const props: FilterCardsProps = defineProps(filterCardsProps);
const emit = defineEmits<{
  (e: 'update:filters', value: CardFilters): void;
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
