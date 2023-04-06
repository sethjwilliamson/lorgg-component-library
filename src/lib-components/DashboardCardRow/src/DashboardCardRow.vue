<template>
  <div class="profile-champion-row wrapper" :style="{ '--index': props.index }">
    <div
      class="small-table-background"
      :style="{ '--background-image': `url(${backgroundCard})` }"
    ></div>
    <div class="wrapper">
      <div class="champion-column column-content">
        <CircleCardItem class="circle-card-item" :card-prop="champion" />
        <span>{{ champion.name }}</span>
      </div>
      <div class="matches-column column-content">
        {{ localeNumber(props.matches, 0, 10) }}
      </div>
      <div
        class="winrate-column column-content"
        :style="{ color: `var(${winrateColor(props.wins / props.matches)})` }"
      >
        {{ localeNumber((props.wins / props.matches) * 100, 1, 3) }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localeNumber, winrateColor } from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
import CircleCardItem from '@/lib-components/CircleCardItem';
import { computed } from 'vue';
import { dashboardCardRowProps, DashboardCardRowProps } from './types';

const props: DashboardCardRowProps = defineProps(dashboardCardRowProps);

const champion = computed(() => {
  return useJsonStore().jsons.cardJsonObject[props.cardCode];
});

const backgroundCard = computed(() => {
  return `https://lor.gg/storage/cards/banner/${champion.value.cardCode}.png`;
});
</script>

<style scoped>
.champion-column {
  --circle-card-item-size: 35px;
  display: flex;
  gap: 10px;
  justify-content: start;
  padding-left: 20px;
}

.circle-card-item {
  min-width: 35px;
}
</style>
