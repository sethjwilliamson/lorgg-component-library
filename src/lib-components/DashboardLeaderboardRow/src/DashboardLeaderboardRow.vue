<template>
  <div class="profile-champion-row wrapper" :style="{ '--index': props.index }">
    <div
      class="small-table-background"
      :style="{
        '--background-image': `url(${backgroundCard})`,
        '--background-color':
          props.index % 2 === 0 ? 'var(--color-background-0)' : 'transparent',
      }"
    ></div>
    <div class="wrapper">
      <div class="champion-column column-content">
        <div class="mana-hexagon">
          <ManaHexagonIcon class="hexagon-icon"></ManaHexagonIcon>
          <div class="mana-number">{{ props.rank }}</div>
        </div>

        <div class="name">
          {{ props.name }}
        </div>
      </div>
      <div class="matches-column column-content">
        {{ localeNumber(props.matches, 0, 10) }}
      </div>
      <div class="column-content change" :class="changeClass">
        <template v-if="props.change !== undefined">
          <FontAwesomeIcon class="icon" icon="fa-chevron-down" />
          <span>
            {{ localeNumber(Math.abs(props.change), 0, 10) }}
          </span>
        </template>
        <template v-else> Test </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localeNumber } from '@/helpers/functions';
import ManaHexagonIcon from '@/lib-components/icons/ManaHexagonIcon';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';
import {
  DashboardLeaderboardRowProps,
  dashboardLeaderboardRowProps,
} from './types';

const props: DashboardLeaderboardRowProps = defineProps(
  dashboardLeaderboardRowProps,
);

const backgroundCard = computed(() => {
  if (props.selectedBannerCard === undefined) {
    return null;
  }

  return `https://lor.gg/storage/cards/banner/${props.selectedBannerCard}.png`;
});

const changeClass = computed(() => {
  if (props.change === undefined) {
    return [];
  }

  if (props.change === 0) {
    return ['neutral'];
  }

  return [props.change > 0 ? 'good' : 'bad'];
});
</script>

<style scoped>
.champion-column {
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  gap: 10px;
}

.mana-hexagon {
  width: 35px;
  position: relative;
}

.mana-number {
  align-items: center;
  color: var(--color-primary-2);
  display: flex;
  font-size: 100%;
  font-weight: 600;
  inset: 0;
  justify-content: center;
  position: absolute;
}
</style>
