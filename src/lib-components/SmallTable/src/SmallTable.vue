<template>
  <div class="table-wrapper">
    <div class="table no-scrollbar">
      <div class="heading wrapper">
        <div
          v-for="headingItem in props.headingItems"
          :key="headingItem.title"
          class="heading-cell column-content"
        >
          <div>{{ headingItem.title }}</div>
        </div>
        <slot name="heading"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SmallTableProps, smallTableProps } from './types';

const props: SmallTableProps = defineProps(smallTableProps);
</script>

<style scoped>
.table-wrapper {
  overflow: hidden;
  padding: 0;
}

.table {
  gap: var(--table-gap, 10px);
  grid-template-rows: var(--table-grid-template-rows);
  grid-auto-rows: var(--table-grid-auto-rows);
  grid-template-columns: var(--table-grid-template-columns);
}

.heading-cell {
  cursor: pointer;
  gap: 10px;
}
</style>
