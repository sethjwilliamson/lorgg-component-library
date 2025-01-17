<template>
  <button class="checkbox-item" :selected="props.isSelected" @click="onUpdate">
    <div
      v-if="props.icon"
      class="checkbox-icon"
      :style="checkboxIconStyle"
    ></div>
    <div class="checkbox-name">
      {{ props.prompt }}
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, ComputedRef, StyleValue } from 'vue';
import { CheckboxItemProps, checkboxItemProps } from './types';

const props: CheckboxItemProps = defineProps(checkboxItemProps);
const emit = defineEmits<{
  (e: 'update:isSelected', value: boolean): void;
}>();

const checkboxIconStyle: ComputedRef<StyleValue> = computed(() => {
  console.log(props.icon);
  return { content: props.icon };
});

function onUpdate() {
  emit('update:isSelected', !props.isSelected);
}
</script>

<style scoped>
.checkbox-item {
  align-items: center;
  background-color: var(--color-2);
  border-radius: 25px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 10px;
  height: 45px;
  padding: 10px;
}

/* When last child is odd or when there is less than 3 total children, span 2 */
.checkbox-item:last-child:nth-child(odd),
.checkbox-item:last-of-type:nth-child(odd),
.checkbox-item:nth-child(1):nth-last-child(3),
.checkbox-item:nth-child(2):nth-last-child(2),
.checkbox-item:nth-child(3):nth-last-child(1),
.checkbox-item:nth-child(2):nth-last-child(1),
.checkbox-item:nth-child(1):nth-last-child(2) {
  grid-column: span 2;
}

.checkbox-item[selected='true'] {
  background-color: var(--color-primary);
}

.checkbox-icon {
  height: 25px;
  filter: drop-shadow(0px 0px 2px black);
  width: 25px;
}

.checkbox-name {
  color: var(--color-text-disabled);
  flex-grow: 1;
  font-size: var(--font-size-s);
  text-align: left;
}

.checkbox-name:first-child {
  text-align: center;
}

.checkbox-item[selected='true'] > .checkbox-name {
  color: var(--color-primary-2);
}
</style>
