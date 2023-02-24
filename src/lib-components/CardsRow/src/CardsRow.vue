<template>
  <!-- TODO: Add Router Link -->
  <a href="/test" class="wrapper">
    <div class="cards-row-wrapper wrapper" :style="{ '--index': props.index }">
      <div class="cards-row-background-wrapper">
        <div class="cards-row-background">
          <div
            v-for="backgroundCard in backgroundCards"
            :key="backgroundCard"
            class="background-card"
            :style="{ '--background-image': `url(${backgroundCard})` }"
          ></div>
        </div>
      </div>
      <div class="cards-row wrapper">
        <div class="column-content deck-highlight-wrapper" @click.stop.prevent>
          <CardSliceItem
            class="card-slice-item"
            :card-code-prop="props.cardCode"
            :maintain-aspect-ratio="true"
          />
        </div>
        <div v-if="props.toggledStats.matches" class="column-content">
          {{ localeNumber(props.matches) }}
        </div>
        <div v-if="props.toggledStats.winrate" class="column-content">
          {{ localeNumber((props.wins / props.matches) * 100, 2, 3) + '%' }}
        </div>
        <div v-if="props.toggledStats.inclusion" class="column-content">
          {{ localeNumber(props.inclusion * 100, 2, 3) + '%' }}
        </div>
        <div v-if="props.toggledStats.avgCopies" class="column-content">
          {{ localeNumber(props.avgCopies, 2, 3) }}
        </div>
        <div v-if="props.toggledStats.mulliganWinrate" class="column-content">
          {{
            props.mulliganWinrate
              ? localeNumber(props.mulliganWinrate * 100, 2, 3) + '%'
              : '-'
          }}
        </div>
        <div v-if="props.toggledStats.keptInMulligan" class="column-content">
          {{
            props.keptInMulligan
              ? localeNumber(props.keptInMulligan * 100, 2, 3) + '%'
              : '-'
          }}
        </div>
        <div v-if="props.toggledStats.drawnWinrate" class="column-content">
          {{
            props.drawnWinrate
              ? localeNumber(props.drawnWinrate * 100, 2, 3) + '%'
              : '-'
          }}
        </div>
        <div v-if="props.toggledStats.turnPlayed" class="column-content">
          {{ props.turnPlayed ? localeNumber(props.turnPlayed, 2, 3) : '-' }}
        </div>
        <div v-if="props.toggledStats.turnsHeld" class="column-content">
          {{ props.turnsHeld ? localeNumber(props.turnsHeld, 2, 3) : '-' }}
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { CardsRowProps, cardsRowProps } from './types';
import { computed } from 'vue';
import { localeNumber } from '@/helpers/functions';
import CardSliceItem from '@/lib-components/CardSliceItem';

const props: CardsRowProps = defineProps(cardsRowProps);

const backgroundCards = computed(() => {
  return ['', `https://lor.gg/storage/cards/banner/${props.cardCode}.png`];
});
</script>

<style scoped>
.card-slice-item {
  margin-left: 5px;
  width: 100%;
}

.cards-row-background-wrapper {
  grid-row: var(--index);
  grid-column: 1 / -1;
  position: relative;
}

.cards-row-background {
  background-color: var(--color-background-2);
  border: var(--color-3) solid 2px;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  inset: 0;
  transition: border-color 0.2s;
}

a.wrapper:hover .cards-row-background {
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
