<template>
  <div class="filter">
    <div class="top">
      <h2 class="title">
        {{ props.title }}
      </h2>
      <p
        v-if="filterArray"
        class="clear"
        :class="clearClass"
        v-on:click="onUpdate"
      >
        <!-- TODO: Translate -->
        Clear
      </p>
    </div>
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
import { ComputedRef, computed } from 'vue';
import { sidePanelSectionPaneProps, SidePanelSectionPaneProps } from './types';

const props: SidePanelSectionPaneProps = defineProps(sidePanelSectionPaneProps);
const emit = defineEmits<{
  // TODO: Switch to use filters instead of any
  (e: 'update:filterArray', value: Array<any>): void;
}>();

const clearClass: ComputedRef<string | null> = computed(() => {
  return props.filterArray && props.filterArray.length > 0 ? 'clickable' : null;
});

function onUpdate(e: Event) {
  emit('update:filterArray', []);
}
</script>

<style scoped>
.filter {
  background-color: var(--color-background-2);
  border-radius: var(--box-border-radius);
  padding: 15px;
  position: relative;
  width: auto;
}

.filter:last-child {
  margin-bottom: 0;
}

.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.title {
  color: var(--color-primary-2);
  font: 600 var(--font-size-xs) Arial;
  margin: 0;
  text-transform: uppercase;
}

.clear {
  color: var(--color-text-disabled);
  font: 400 var(--font-size-xs) Arial;
  margin: 0;
  cursor: default;
}

.clear.clickable {
  color: var(--color-gold);
  cursor: pointer;
  opacity: 1;
}
</style>
