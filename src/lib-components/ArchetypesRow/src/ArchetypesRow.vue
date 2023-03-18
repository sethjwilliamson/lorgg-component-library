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
            class="background-card-wrapper"
            :style="{ '--background-image': `url(${backgroundCard})` }"
          >
          <div class="background-card"></div>
        </div>
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
  display: flex;
  overflow: hidden;
  position: absolute;
  inset: 0;
  transition: border-color 0.2s;
}

a.wrapper:hover .archetypes-row-background {
  border-color: #816f0d;
}

.background-card-wrapper {
  flex-grow: 1;
}

.background-card {
  --overlap-margin: 100px;
  background-image: var(--background-image);
  background-size: cover;
  background-position: center 25%;
  opacity: 40%;
  height: 100%;
  margin-left: calc( -1 * var(--overlap-margin));
  margin-right: calc( -1 * var(--overlap-margin));

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black calc(0% + (2 * var(--overlap-margin))),
    black calc(100% - (2 * var(--overlap-margin))),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black calc(0% + (2 * var(--overlap-margin))),
    black calc(100% - (2 * var(--overlap-margin))),
    transparent 100%
  );
}

.background-card-wrapper:first-child > .background-card {
  -webkit-mask-image: linear-gradient(
    to right,
    black 0%,
    black calc(100% - (2 * var(--overlap-margin))),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    black 0%,
    black calc(100% - (2 * var(--overlap-margin))),
    transparent 100%
  );
  margin-left: 0;  
}

.background-card-wrapper:last-child > .background-card {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black calc(0% + (2 * var(--overlap-margin))),
    black 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black calc(0% + (2 * var(--overlap-margin))),
    black 100%
  );
  margin-right: 0;
}
</style>
