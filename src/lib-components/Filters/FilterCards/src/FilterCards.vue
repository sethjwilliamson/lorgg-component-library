<template>
  <div>
    <FilterManaCost v-model:filter-array="filters.manaCostFilters">
    </FilterManaCost>
    <FilterRegions v-model:filter-array="filters.regionFilters"></FilterRegions>
    <FilterAdvanced
      v-model:filter-value="filters.advancedFilters"
    ></FilterAdvanced>
  </div>
</template>

<script setup lang="ts">
import { CardFilters } from '#/filters';
import FilterAdvanced from '@/lib-components/Filters/FilterAdvanced';
import FilterRegions from '@/lib-components/Filters/FilterRegions';
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
</script>

<style scoped></style>
