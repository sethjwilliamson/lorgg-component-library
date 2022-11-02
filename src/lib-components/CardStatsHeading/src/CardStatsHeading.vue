<template>
  <div class="card-stats-heading">
    <div>
      {{ t('cards.card') }}
    </div>

    <div
      v-for="toggleStat in (Object.keys(props.toggledStats) as (keyof CardStatsToggle)[])"
      v-show="props.toggledStats[toggleStat]"
      :key="toggleStat"
      @click="onClick(toggleStat)"
    >
      {{ t(`cards.${toggleStat}`) }}
      <font-awesome-icon
        :icon="sortIcon(toggleStat)"
        :class="props.currentSort === toggleStat ? null : 'disabled'"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardStatsToggle } from '@/lib-components/CardStatsRow/src/types';
import { useI18n } from 'vue-i18n';
import { cardStatsHeadingProps, CardStatsHeadingProps } from './types';
const { t } = useI18n();

const props: CardStatsHeadingProps = defineProps(cardStatsHeadingProps);
const emit = defineEmits<{
  (e: 'toggleSort', value: string): void;
}>();

function sortIcon(button: string) {
  if (button !== props.currentSort) {
    return 'sort';
  }

  if (props.isSortDesc) {
    return 'sort-down';
  }

  return 'sort-up';
}

function onClick(button: string) {
  emit('toggleSort', button);
}
</script>

<style scoped>
.card-stats-heading {
  display: flex;
  padding: 10px 0;
  background-color: var(--color-background-2);
  border-radius: var(--border-radius-l);
}

.card-stats-heading > :first-child {
  width: 300px;
}

.card-stats-heading > div {
  align-items: center;
  color: var(--color-primary-2);
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-bold);
  gap: 10px;
  justify-content: center;
  min-width: 200px;
  cursor: pointer;
  text-align: end;
}
</style>
