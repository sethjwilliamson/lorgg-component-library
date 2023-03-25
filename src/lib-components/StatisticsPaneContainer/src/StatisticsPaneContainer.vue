<template>
  <div
    class="statitistics-pane-container"
    :class="isFullScreen ? 'full-screen' : ''"
    ref="statitisticsPaneContainer"
  >
    <div class="top">
      <div class="heading">
        {{ props.heading }}
      </div>
      <FontAwesomeIcon
        @click="maximizeSelf"
        class="maximize-icon"
        icon="fa-maximize"
      />
    </div>
    <div class="chart">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted, ref } from 'vue';
import {
  StatisticsPaneContainerProps,
  statisticsPaneContainerProps,
} from './types';

const props: StatisticsPaneContainerProps = defineProps(
  statisticsPaneContainerProps,
);

const statitisticsPaneContainer = ref<HTMLElement | null>(null);
const isFullScreen = ref(false);

function maximizeSelf() {
  if (isFullScreen.value) {
    document.exitFullscreen();
  } else {
    statitisticsPaneContainer.value?.requestFullscreen();
  }
}

onMounted(() => {
  statitisticsPaneContainer.value?.addEventListener(
    'fullscreenchange',
    (ev) => {
      isFullScreen.value = document.fullscreenElement !== null;
    },
  );
});
</script>

<style scoped>
.statitistics-pane-container {
  background-color: var(--color-background-2);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
  border-radius: 20px;
}

.full-screen {
  border-radius: 0;
}

.top {
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
}

.heading {
  color: var(--color-primary-2);
  font-weight: 600;
  font-size: 16px;
}

.maximize-icon {
  color: var(--color-primary-2);
  opacity: 0.5;
  width: 20px;
  height: 20px;
}

.maximize-icon:hover {
  opacity: 1;
}

.chart {
  position: relative;
}
</style>
