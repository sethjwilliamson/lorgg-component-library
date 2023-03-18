<template>
  <!-- TODO: Add Router Link -->
  <a href="/test" class="wrapper">
    <div class="decks-row-wrapper wrapper" :style="{ '--index': props.index }">
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
      <div class="decks-row wrapper">
        <div class="column-content deck-highlight-wrapper" @click.stop.prevent>
          <DeckHighlight
            :deck-code="props.deckcode"
            :deck="deck"
            :cards="cards"
          ></DeckHighlight>
        </div>
        <template v-if="props.type === 'data'">
          <div class="column-content">{{ localeNumber(props.matches) }}</div>
          <div
            class="column-content"
            :style="{
              color: `var(${winrateColor(props.wins / props.matches)})`,
            }"
          >
            {{ localeNumber((props.wins / props.matches) * 100, 1, 3) }}%
          </div>
        </template>
        <template v-else>
          <div class="column-content">{{ props.name }}</div>
          <div class="column-content">
            {{ $dayjs(props.updatedAt).fromNow() }}
          </div>
          <div class="column-content">
            {{ $dayjs(props.createdAt).fromNow() }}
          </div>
        </template>
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
        <div
          class="column-content options-button"
          @click.stop.prevent="toggleOptionsButton"
        >
          <FontAwesomeIcon icon="ellipsis-v"></FontAwesomeIcon>
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
  winrateColor,
} from '@/helpers/functions';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ManaCurveChart from '@/lib-components/Charts/ManaCurveChart';
import RegionsLine from '@/lib-components/RegionsLine';
import { inject } from 'vue';
import dayjs from 'dayjs';

const $dayjs = inject('dayjs') as typeof dayjs;

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

function toggleOptionsButton() {
  console.log('Options Button Clicked.');
}
</script>

<style scoped>
.mana-curve-chart {
  height: 40px;
  width: 90px;
}

.options-button {
  opacity: 0.6;
  min-width: unset;
}

.options-button:hover {
  opacity: 1;
}

.region-chart-wrapper {
  display: none;
  grid-column: 1 / -1;
  padding: 0 10px;
}

a.wrapper:hover .table-card-row-background {
  border-color: #816f0d;
}
</style>
