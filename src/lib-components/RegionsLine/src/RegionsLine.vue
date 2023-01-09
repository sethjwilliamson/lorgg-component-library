<template>
  <div class="regions-line">
    <div
      v-for="(count, region) in regionCount"
      :key="region"
      :style="regionLineStyle(count, region)"
      class="region-line"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ObjectWithNumber } from '#/helpers';
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getRegionsFromDeck,
} from '@/helpers/functions';
import { computed, CSSProperties, StyleValue } from 'vue';
import { RegionsLineProps, regionsLineProps } from './types';

const props: RegionsLineProps = defineProps(regionsLineProps);

const deck = computed(() => {
  if (props.deck) {
    return props.deck;
  }

  return getDeckObjectFromCode(props.deckCode);
});

const cards = computed(() => {
  if (props.cards) {
    return props.cards;
  }

  return getCardsFromDeck(deck.value);
});

const regionCount = computed(() => {
  const returnValue: ObjectWithNumber = {};

  for (const region of getRegionsFromDeck(deck.value)) {
    returnValue[region] = 0;
  }

  for (const card of cards.value) {
    for (const regionRef of card.regionRefs) {
      if (!(regionRef in returnValue)) {
        continue;
      }

      returnValue[regionRef] += deck.value[card.cardCode];
    }
  }

  return returnValue;
});

function regionLineStyle(
  count: number,
  region: string | number,
): CSSProperties {
  return {
    flexGrow: count,
    backgroundColor: `var(--color-${region}, var(--color-Runeterra))`,
  };
}
</script>

<style scoped>
.regions-line {
  display: flex;
  gap: 10px;
  width: 100%;
}

.region-line {
  border-radius: 5px;
  height: 10px;
}
</style>
