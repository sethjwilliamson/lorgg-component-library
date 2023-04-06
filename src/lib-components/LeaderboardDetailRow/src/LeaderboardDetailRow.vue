<template>
  <!-- TODO: Add Router Link -->
  <a href="/test" class="wrapper">
    <div
      class="leaderboard-detail-row-wrapper wrapper"
      :style="{ '--index': props.index }"
    >
      <div class="leaderboard-detail-row-background-wrapper">
        <div class="leaderboard-detail-row-background">
          <div
            v-for="backgroundCard in backgroundCards"
            :key="backgroundCard"
            class="background-card"
            :style="{ '--background-image': `url(${backgroundCard})` }"
          ></div>
        </div>
      </div>
      <div class="leaderboard-detail-row wrapper">
        <div class="column-content card-wrapper" @click.stop.prevent>
          <CardSliceItem
            class="card-slice-item"
            :card-code-prop="props.selected_banner_card ?? undefined"
            :color="
              props.selected_banner_color ?? 'var(--color-background-2-rgb)'
            "
            :ignore-card-item="true"
            :mana-number="props.rank + 1"
            :name="props.name"
            :maintain-aspect-ratio="true"
          />
        </div>

        <div class="column-content">
          {{ localeNumber(props.lp) }}
        </div>

        <div class="column-content change" :class="changeClass">
          <template v-if="props.change !== null">
            <FontAwesomeIcon class="icon" icon="fa-chevron-down" />
            <span>
              {{ localeNumber(Math.abs(props.change)) }}
            </span>
          </template>
          <template v-else> Test </template>
        </div>

        <div class="column-content">
          {{ localeNumber(props.matches) }}
        </div>

        <div
          class="column-content"
          :style="{ color: `var(${winrateColor(props.wins / props.matches)})` }"
        >
          {{ localeNumber((props.wins / props.matches) * 100, 1, 3) }}%
        </div>

        <div class="column-content deck-highlight-wrapper">
          <DeckHighlight :deck-code="props.favorite_deck" />
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { leaderboardDetailRowProps, LeaderboardDetailRowProps } from './types';
import { computed } from 'vue';
import { localeNumber, winrateColor } from '@/helpers/functions';
import CardSliceItem from '@/lib-components/CardSliceItem';
import DeckHighlight from '@/lib-components/DeckHighlight';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props: LeaderboardDetailRowProps = defineProps(leaderboardDetailRowProps);

const backgroundCards = computed(() => {
  if (props.selected_banner_card) {
    return [
      '',
      `https://lor.gg/storage/cards/banner/${props.selected_banner_card}.png`,
    ];
  }

  return [];
});

const changeClass = computed(() => {
  if (props.change === null) {
    return [];
  }

  if (props.change === 0) {
    return ['neutral'];
  }

  return [props.change > 0 ? 'good' : 'bad'];
});
</script>

<style scoped>
.card-slice-item {
  margin-left: 5px;
  width: 100%;
}

.card-wrapper {
  filter: unset;
  min-width: 250px;
}

.deck-highlight-wrapper {
  min-width: 250px;
}

.leaderboard-detail-row-background-wrapper {
  grid-row: var(--index);
  grid-column: 1 / -1;
  position: relative;
}

.leaderboard-detail-row-background {
  background-color: var(--color-background-2);
  border: var(--color-3) solid 2px;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  inset: 0;
  transition: border-color 0.2s;
}

a.wrapper:hover .leaderboard-detail-row-background {
  border-color: #d9b905;
}

.background-card {
  background-image: var(--background-image);
  background-size: cover;
  background-position: center 25%;
  bottom: 0;
  opacity: 40%;
  position: absolute;
  top: 0;
  width: 60%;
}

.background-card:first-child {
  -webkit-mask-image: linear-gradient(
    to right,
    black 0%,
    black 66.66%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    black 0%,
    black 66.66%,
    transparent 100%
  );
  left: 0;
}

.background-card:last-child {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 33.33%,
    black 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 33.33%,
    black 100%
  );
  right: 0;
}
</style>
