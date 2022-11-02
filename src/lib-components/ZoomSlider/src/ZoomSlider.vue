<template>
  <div>
    <div ref="button" class="circle-button">
      <font-awesome-icon icon="search-plus" class="zoom-button" />
    </div>
    <div ref="slider" class="slider-wrapper">
      <input
        type="range"
        min="1"
        max="10"
        class="slider"
        :value="props.modelValue"
        @input="onUpdate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import { onMounted, ref } from 'vue';
import { zoomSliderProps, ZoomSliderProps } from './types';

const button = ref<HTMLElement>();
const slider = ref<HTMLElement>();

const props: ZoomSliderProps = defineProps(zoomSliderProps);
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

function onUpdate(e: Event) {
  emit(
    'update:modelValue',
    Number.parseInt((e.target as HTMLInputElement).value),
  );
}

onMounted(() => {
  tippy(button.value as HTMLElement, {
    content: slider.value as HTMLElement,
    arrow: true,
    interactive: true,
    trigger: 'mouseenter click',
    interactiveBorder: 10,
  });
});
</script>

<style scoped>
.slider-wrapper {
  width: 140px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1200px) {
  .slider {
    transform: rotate(270deg);
  }

  .slider-wrapper {
    width: 25px;
    height: 140px;
  }
}
</style>
