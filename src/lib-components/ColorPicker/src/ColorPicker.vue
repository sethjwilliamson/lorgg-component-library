<template>
  <input type="color" :value="props.modelValue" @input="onUpdate" />
</template>

<script setup lang="ts">
import { colorPickerProps, ColorPickerProps } from './types';

const props: ColorPickerProps = defineProps(colorPickerProps);
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function onUpdate(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
}
</script>

<style scoped>
input {
  background-color: var(--color-1);
  border-radius: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  height: 45px;
  padding: 10px;
  width: 200px;
}
</style>
