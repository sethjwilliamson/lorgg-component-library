<template>
  <div class="filter">
    <div v-if="props.title || filterArray" class="top">
      <h2 v-if="props.title" class="title">
        {{ props.title }}
      </h2>
      <p
        v-if="filterArray"
        v-t="'general.clear'"
        class="clear"
        :class="clearClass"
        @click="onClear"
      ></p>
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
  (e: 'clear:filterArray'): void;
}>();

const clearClass: ComputedRef<string | null> = computed(() => {
  return props.filterArray && props.filterArray.length > 0 ? 'clickable' : null;
});

function onClear() {
  emit('clear:filterArray');
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
  font-size: var(--font-size-xs);
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
}

.clear {
  color: var(--color-text-disabled);
  font-size: var(--font-size-xs);
  font-weight: 400;
  margin: 0;
  cursor: default;
}

.clear.clickable {
  color: var(--color-gold);
  cursor: pointer;
  opacity: 1;
}
</style>
