<template>
  <SidePanelSectionPane
    class="advanced-filters"
    :filter-array="filterValue"
    :title="t('general.advanced')"
    @clear:filter-array="onClear"
  >
    <AdvancedFilterItem
      v-for="(item, index) in filterValue"
      :key="index"
      v-model:filter-value="filterValue[index]"
      class="advanced-filter-item"
    >
    </AdvancedFilterItem>

    <div class="new-advanced-filter" @click="newAdvancedFilter">
      {{ t('general.newAdvancedFilter') }}
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import AdvancedFilterItem from '@/lib-components/AdvancedFilterItem';
import { FilterAdvancedProps, filterAdvancedProps } from './types';
import { useI18n } from 'vue-i18n';
import { AdvancedFilter } from '@/lib-components/AdvancedFilterItem/src/types';
import { reactive, watch } from 'vue';
const { t } = useI18n();

const props: FilterAdvancedProps = defineProps(filterAdvancedProps);
const emit = defineEmits<{
  (e: 'update:filterValue', value: AdvancedFilter[]): void;
}>();

const filterValue = reactive(props.filterValue);

watch(filterValue, () => {
  emit('update:filterValue', filterValue);
});

function onClear() {
  filterValue.splice(0);
}

function newAdvancedFilter() {
  filterValue.push({
    attribute: 'attack',
    equality: '>',
    number: 0,
  });
}
</script>

<style scoped>
.advanced-filters {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.new-advanced-filter {
  height: 45px;
  background-color: var(--color-2);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-primary-2);
  font-size: 14px;
}
</style>
