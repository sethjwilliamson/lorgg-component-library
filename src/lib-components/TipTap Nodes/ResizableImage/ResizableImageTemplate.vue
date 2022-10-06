<template>
  <node-view-wrapper as="span">
    <img
      v-bind="node.attrs"
      ref="resizableImg"
      :draggable="true"
      :data-drag-handle="true"
    />
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3';
import { ref } from 'vue';
import { onMounted } from 'vue';

const props = defineProps(nodeViewProps);

const isResizing = ref<boolean>(false);
let lastMovement = 0;
let aspectRatio = 0;
const resizableImg = ref<HTMLImageElement | null>(null);

function resizeAspectRatio(grow: boolean) {
  let calcH;

  if (!resizableImg.value) {
    return;
  }

  if (grow) {
    calcH = resizableImg.value.height + 1;
  } else {
    calcH = resizableImg.value.height - 1;
  }
  
  const calcW = calcH * aspectRatio;

  props.updateAttributes({ width: calcW, height: calcH });
}

onMounted(() => {
  if (resizableImg.value) {
    resizableImg.value.onload = () => {
      aspectRatio =
        (resizableImg.value?.naturalWidth || 1) /
        (resizableImg.value?.naturalHeight || 1);
    };

    resizableImg.value.addEventListener('click', () => {
      isResizing.value = !isResizing.value;
    });

    resizableImg.value.addEventListener('mouseleave', () => {
      isResizing.value = false;
    });

    resizableImg.value.addEventListener('mousemove', (e) => {
      if (!isResizing.value) {
        return;
      }

      const movement = Math.sqrt(
        Math.pow(e.offsetY, 2) + Math.pow(e.offsetX, 2),
      );
      if (lastMovement > 0) {
        if (movement > lastMovement) {
          resizeAspectRatio(true);
        } else if (movement < lastMovement) {
          resizeAspectRatio(false);
        }
      }

      lastMovement = movement;
    });
  }
});
</script>
