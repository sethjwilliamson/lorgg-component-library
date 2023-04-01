<template>
  <div class="deck-highlight" :class="props.showEye ? '' : 'hide-eye'">
    <DeckHighlightRegions
      class="deck-highlight-regions"
      :regions="regions"
    ></DeckHighlightRegions>
    <DeckHighlightCards
      class="deck-highlight-cards"
      :cards="champions"
      :regions="regions"
    ></DeckHighlightCards>
    <DeckHighlightEye
      class="deck-highlight-eye"
      :cards="cards"
      :deck="deck"
      :deck-code="props.deckCode"
    />
  </div>
</template>

<script setup lang="ts">
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getRegions,
  isAChampion,
} from '@/helpers/functions';
import DeckHighlightCards from '@/lib-components/DeckHighlightCards';
import DeckHighlightEye from '@/lib-components/DeckHighlightEye';
import DeckHighlightRegions from '@/lib-components/DeckHighlightRegions';
import { computed } from 'vue';
import { DeckHighlightProps, deckHighlightProps } from './types';

const props: DeckHighlightProps = defineProps(deckHighlightProps);

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
const regions = computed(() => {
  return getRegions(cards.value);
});
const champions = computed(() => {
  return cards.value.filter((x) => {
    return isAChampion(x);
  });
});
</script>

<style scoped>
.deck-highlight {
  align-items: center;
  display: flex;
  gap: 15px;
}

.deck-highlight-regions {
  width: var(--deck-highlight-regions-size, 85px);
}

.deck-highlight-cards {
  width: var(--deck-highlight-cards-size, 85px);
}

.deck-highlight-eye {
  color: var(--color-primary-2);
}

.hide-eye .deck-highlight-eye {
  display: none;
}
</style>
