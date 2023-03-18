<template>
  <!-- TODO: Add Router Link -->
  <a href="/test" class="wrapper">
    <div
      class="archetypes-row-wrapper wrapper"
      :style="{ '--index': props.index }"
    >
      <div class="table-card-row-background-wrapper">
        <div class="table-card-row-background">
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
a.wrapper:hover .table-card-row-background {
  border-color: #816f0d;
}
</style>
