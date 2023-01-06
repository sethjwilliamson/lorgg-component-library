<template>
  <div v-if="props.showModal" class="modal-item" @click="onBackgroundClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ModalItemProps, modalItemProps } from './types';

const props: ModalItemProps = defineProps(modalItemProps);
const emit = defineEmits<{
  (e: 'update:showModal', value: boolean): void;
}>();

function onBackgroundClick(e: Event) {
  emit('update:showModal', false);
}
</script>

<style scoped>
.modal-item {
  align-items: center;
  background-color: rgba(var(--color-background-0-rgb), 0.4);
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
}
</style>
