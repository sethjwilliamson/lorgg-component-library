<template>
  <button class="checkbox-item" :selected="props.isSelected" @click="onUpdate">
    <ManaHexagonIcon></ManaHexagonIcon>
    <div class="prompt">
      {{ props.prompt }}
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, ComputedRef, StyleValue } from 'vue';
import { CheckboxItemProps, checkboxItemProps } from './types';
import ManaHexagonIcon from '@/lib-components/icons/ManaHexagonIcon/src/ManaHexagonIcon.vue';

const props: CheckboxItemProps = defineProps(checkboxItemProps);
const emit = defineEmits<{
  (e: 'update:isSelected', value: boolean): void;
}>();

function onUpdate() {
  emit('update:isSelected', !props.isSelected);
}
</script>

<style scoped>
.checkbox-item {
  background-color: transparent;
  border: none;
  opacity: 0.2;
  padding: 0;
  position: relative;
}

.checkbox-item[selected='true'] {
  opacity: 1;
}

.prompt {
  align-items: center;
  color: var(--color-primary-2);
  display: flex;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  inset: 0;
  justify-content: center;
  position: absolute;
  text-align: center;
}
</style>
