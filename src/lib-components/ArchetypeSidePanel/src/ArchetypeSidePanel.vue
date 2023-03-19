<template>
  <div>
    <ArchetypeSidePanelHighlight
      :card-codes="props.cardCodes"
      :regions="props.regions"
    />
    <FilterSampleSize
      v-model:filter-array="filters.sampleSizeFilters"
    ></FilterSampleSize>
    <FilterTime v-model:filter-array="filters.timeFilters"></FilterTime>
    <FilterServers v-model:filter-array="filters.serverFilters"></FilterServers>
  </div>
</template>

<script setup lang="ts">
import ArchetypeSidePanelHighlight from '@/lib-components/ArchetypeSidePanelHighlight';
import FilterSampleSize from '@/lib-components/Filters/FilterSampleSize';
import FilterTime from '@/lib-components/Filters/FilterTime';
import FilterServers from '@/lib-components/Filters/FilterServers';
import { reactive, watch } from 'vue';
import {
  ArchetypePageFilters,
  ArchetypeSidePanelProps,
  archetypeSidePanelProps,
} from './types';

const props: ArchetypeSidePanelProps = defineProps(archetypeSidePanelProps);
const emit = defineEmits<{
  (e: 'update:filters', value: ArchetypePageFilters): void;
}>();

const filters = reactive(props.filters);

watch(filters, () => {
  emit('update:filters', filters);
});
</script>

<style scoped></style>
