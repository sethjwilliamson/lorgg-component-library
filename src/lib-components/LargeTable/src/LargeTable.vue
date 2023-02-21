<template>
  <div class="table-wrapper">
    <div class="large-table table no-scrollbar">
      <div class="heading-background-outer">
        <div class="heading-background-absolute"></div>
        <div class="heading-background-inner"></div>
      </div>
      <div class="heading wrapper">
        <div
          v-for="headingItem in props.headingItems"
          v-show="headingItem.isShown"
          :key="headingItem.title"
          class="heading-cell column-content"
        >
          <div>{{ headingItem.title }}</div>
          <div :class="['sort-icons', headingItem.sortDirection]">
            <FontAwesomeIcon icon="sort-up" class="sort-icon" />
            <FontAwesomeIcon icon="sort-down" class="sort-icon" />
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { LargeTableProps, largeTableProps } from './types';

const props: LargeTableProps = defineProps(largeTableProps);
</script>

<style scoped>
.large-table {
  --background-color: var(--color-background-1);
  background-color: var(--background-color);
  gap: var(--table-gap, 10px);
  grid-auto-rows: var(--table-grid-auto-rows);
  grid-template-columns: var(--table-grid-template-columns);
  padding: 0 4px;
}

.heading-cell {
  gap: 10px;
}

.sort-icons {
  display: flex;
  flex-direction: column;
}

.sort-icons.not-sortable {
  display: none;
}

.sort-icon {
  opacity: 0.5;
}

.sort-icons > :first-child {
  margin-bottom: -12px;
}

.sort-icons.sort-up > [data-icon='sort-up'] {
  opacity: 1;
}

.sort-icons.sort-down > [data-icon='sort-down'] {
  opacity: 1;
}
</style>
