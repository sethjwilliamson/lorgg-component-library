<template>
  <div class="toggle-switch">
    <div
      v-show="selectedOption > -1"
      class="selection-container"
      :style="selectionStyle"
    >
      <div class="selection"></div>
    </div>
    <div
      v-for="(option, index) in props.options"
      :key="index"
      ref="option-container"
      :style="optionStyle(index)"
      class="option-container"
      @click="optionClicked(index)"
    >
      <div class="option flex-center">
        <h1 class="option-text">
          {{ option }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, StyleValue } from 'vue';
import { ToggleSwitchProps, toggleSwitchProps } from './types';

const props: ToggleSwitchProps = defineProps(toggleSwitchProps);
const emit = defineEmits<{
  (e: 'update:selectedOption', value: number): void;
}>();

const selectionStyle: ComputedRef<StyleValue> = computed(() => {
  return {
    left: `calc(var(--spacing-1) + (100% - calc(var(--spacing-1) * 2)) / ${props.options.length} * ${props.selectedOption})`,
    width: `calc((100% - calc(var(--spacing-1) * 2)) / ${props.options.length})`,
  };
});

function optionStyle(index: number) {
  return {
    cursor: props.selectedOption != index ? 'pointer' : 'default',
    left: `calc(var(--spacing-1) + (100% - calc(var(--spacing-1) * 2)) / ${props.options.length} * ${index})`,
    width: `${(1 / props.options.length) * 100}%`,
  };
}

function optionClicked(index: number) {
  emit('update:selectedOption', index);
}
</script>

<style scoped>
.toggle-switch {
  position: relative;
  border-radius: 25px;
  height: 100%;
  background-color: var(--color-2);
}

.selection-container {
  position: absolute;
  top: var(--spacing-1);
  bottom: var(--spacing-1);
  transition: left 1s var(--transition-3);
}

.selection {
  position: relative;
  border-radius: 100px;
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);
}

.option {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
  margin: auto;
}

.option-container {
  position: absolute;
  top: var(--spacing-1);
  bottom: var(--spacing-1);
}

.option-text {
  margin: auto;
  color: white;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-s);
}
</style>
