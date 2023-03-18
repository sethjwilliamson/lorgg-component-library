<template>
  <!-- TODO: Add Router Link -->
  <a href="/test" class="wrapper">
    <div
      class="archetypes-row-wrapper wrapper"
      :style="{ '--index': props.index }"
    >
      <div class="archetypes-row-background-wrapper">
        <div class="archetypes-row-background">
          <div
            v-for="backgroundCard in backgroundCards"
            :key="backgroundCard"
            class="background-card"
            :style="{ '--background-image': `url(${backgroundCard})` }"
          ></div>
        </div>
      </div>
      <div class="archetypes-row wrapper">
        <div class="column-content deck-highlight-wrapper" @click.stop.prevent>
          <DeckHighlight
            :deck-code="props.deckcode"
            :deck="deck"
            :cards="cards"
          ></DeckHighlight>
        </div>
        <div class="column-content">
          {{ localeNumber(props.matches) }}
        </div>
        <div
          class="column-content"
          :style="{
            color: `var(${winrateColor(props.wins / props.matches)})`,
          }"
        >
          {{ localeNumber((props.wins / props.matches) * 100, 2, 3) + '%' }}
        </div>
        <div class="column-content">
          {{ localeNumber(props.playrate, 2, 3) + '%' }}
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArchetypesRowProps, archetypesRowProps } from './types';

import DeckHighlight from '@/lib-components/DeckHighlight';
import { computed } from 'vue';
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  localeNumber,
  winrateColor,
} from '@/helpers/functions';

const props: ArchetypesRowProps = defineProps(archetypesRowProps);

const deck = computed(() => {
  return getDeckObjectFromCode(props.deckcode);
});

const cards = computed(() => {
  return getCardsFromDeck(deck.value);
});

const backgroundCards = computed(() => {
  return props.cards.map((x) => {
    return `https://lor.gg/storage/cards/banner/${x}.png`;
  });
});
</script>

<style scoped>
.archetypes-row-background-wrapper {
  grid-row: var(--index);
  grid-column: 1 / -1;
  position: relative;
}

.archetypes-row-background {
  background-color: var(--color-background-2);
  border: var(--color-3) solid 2px;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  inset: 0;
  transition: border-color 0.2s;
}

a.wrapper:hover .archetypes-row-background {
  border-color: #816f0d;
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
  left: unset;
}
</style>
