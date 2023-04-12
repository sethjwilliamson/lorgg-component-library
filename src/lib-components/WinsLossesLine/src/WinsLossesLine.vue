<template>
  <div class="wins-losses-line">
    <div v-if="props.showDetails" class="details">
      <span class="wl-record"
        >{{ props.wins }}W {{ props.matches - props.wins }}L -
      </span>
      <span
        :style="{ color: `var(${winrateColor(props.wins / props.matches)})` }"
        >{{ localeNumber((props.wins / props.matches) * 100, 1, 3) }}%</span
      >
    </div>
    <div class="lines">
      <div
        v-if="props.wins !== 0"
        class="wins line"
        :style="{ flexGrow: props.wins }"
      ></div>
      <div
        v-if="props.matches - props.wins !== 0"
        class="losses line"
        :style="{ flexGrow: props.matches - props.wins }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localeNumber, winrateColor } from '@/helpers/functions';
import { WinsLossesLineProps, winsLossesLineProps } from './types';

const props: WinsLossesLineProps = defineProps(winsLossesLineProps);
</script>

<style scoped>
.wins-losses-line {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.lines {
  display: flex;
  gap: 10px;
  width: 100%;
}

.line {
  border-radius: 5px;
  height: 10px;
}

.wins.line {
  background-color: var(--color-good);
}

.losses.line {
  background-color: var(--color-bad);
}

.details {
  font-size: 14px;
  font-weight: 600;
}

.wl-record {
  color: var(--color-0);
}
</style>
