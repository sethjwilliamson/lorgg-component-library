<template>
  <!-- TODO: Add Router Link -->
  <a href="/test">
    <div class="decks-row-wrapper">
      <div class="decks-row-background">
        <div
          v-for="backgroundCard in backgroundCards"
          :key="backgroundCard"
          class="background-card"
          :style="{ '--background-image': `url(${backgroundCard})` }"
        ></div>
      </div>
      <div class="decks-row">
        <div class="column-content deck-highlight-wrapper" @click.stop.prevent>
          <DeckHighlight
            :deck-code="props.deckcode"
            :deck="deck"
            :cards="cards"
          ></DeckHighlight>
        </div>
        <div class="column-content">{{ localeNumber(props.matches) }}</div>
        <div class="column-content">
          {{ localeNumber((props.wins / props.matches) * 100, 1, 3) }}%
        </div>
        <div class="column-content">
          <ManaCurveChart
            class="mana-curve-chart"
            :deck-code="props.deckcode"
            :padding-top="0"
            :show-data-labels="false"
            :data-labels-offset="0"
            :tooltips-enabled="false"
            :display-x-scale="false"
            :animation="false"
          ></ManaCurveChart>
        </div>
        <div class="column-content">
          {{
            (
              getGemsCost(deck, true) ?? getGemsCost(deck, false)
            )?.toLocaleString()
          }}
        </div>
        <div class="column-content region-chart-wrapper">
          <RegionsLine
            :cards="cards"
            :deck-code="props.deckcode"
            :deck="deck"
          ></RegionsLine>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { DecksRowProps, decksRowProps } from './types';

import DeckHighlight from '@/lib-components/DeckHighlight';
import { computed } from 'vue';
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getGemsCost,
  getMostImportantCards,
  localeNumber,
} from '@/helpers/functions';
import ManaCurveChart from '@/lib-components/Charts/ManaCurveChart';
import RegionsLine from '@/lib-components/RegionsLine';

const props: DecksRowProps = defineProps(decksRowProps);

const deck = computed(() => {
  return getDeckObjectFromCode(props.deckcode);
});

const cards = computed(() => {
  return getCardsFromDeck(deck.value);
});

const backgroundCards = computed(() => {
  return getMostImportantCards(cards.value, deck.value, 2).map((x) => {
    return `https://lor.gg/storage/cards/banner/${x.cardCode}.png`;
  });
});
</script>

<style scoped>
.decks-row-wrapper {
  --border-radius: 20px;
  background-color: var(--color-background-2);
  border-radius: var(--border-radius);
  padding: 10px;
  position: relative;
}

.decks-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 10px;
  position: relative;
  z-index: 1;
}

.deck-highlight-wrapper {
  min-width: 250px;
}

.mana-curve-chart {
  height: 40px;
  width: 90px;
}

.region-chart-wrapper {
  grid-column: 1 / -1;
  padding: 0 10px;
}

.decks-row-background {
  border-radius: var(--border-radius);
  overflow: hidden;
  position: absolute;
  inset: 0;
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
