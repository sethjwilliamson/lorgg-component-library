<template>
  <div
    v-if="props.showModal"
    ref="modalItem"
    class="modal-item"
    @click.self="onBackgroundClick"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { watch, nextTick, ref } from 'vue';
import { ModalItemProps, modalItemProps } from './types';

const props: ModalItemProps = defineProps(modalItemProps);
const emit = defineEmits<{
  (e: 'update:showModal', value: boolean): void;
}>();

const modalItem = ref<HTMLElement | null>(null);

function onBackgroundClick() {
  emit('update:showModal', false);
}

watch(
  () => props.showModal,
  () => {
    if (!props.showModal) {
      return;
    }

    nextTick(() => {
      if (!modalItem.value) {
        return;
      }

      document.body.appendChild(modalItem.value);
    });
  },
);
</script>

<style scoped>
.modal-item {
  align-items: center;
  background-color: rgba(var(--color-background-0-rgb), 0.4);
  cursor: default;
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 999;
}
</style>
