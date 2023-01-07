<template>
  <div class="deck-preview no-scrollbar">
    <div class="top">
      <DeckButtons
        class="deck-buttons no-scrollbar"
        :deck-code="props.deckCode"
        :deck-id="props.deckId"
        :show-buttons="showButtons"
      ></DeckButtons>
    </div>
    <div class="deck-summary-wrapper" :style="deckSummaryStyle">
      <DeckSummary :deck="deck"></DeckSummary>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getMostImportantCards,
} from '@/helpers/functions';
import DeckSummary from '@/lib-components/Deck/DeckSummary';
import DeckButtons from '@/lib-components/DeckButtons';
import { computed } from 'vue';
import { DeckPreviewProps, deckPreviewProps } from './types';

const props: DeckPreviewProps = defineProps(deckPreviewProps);

const showButtons = {
  deleteDeck: false,
  updateDeckPrivacy: false,
  editDeckName: false,
  gemsCost: true,
  openArchetypePage: true,
  simulateMulligan: false,
  openInDeckBuilder: true,
  copyDeckCode: true,
  uploadDeckToLor: true,
  shareDeck: false,
};

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

const deckSummaryStyle = computed(() => {
  return {
    '--deck-summary-background': `url(https://lor.gg/storage/cards/full-art/${
      getMostImportantCards(cards.value, deck.value, 1)[0].cardCode
    }.webp)`,
  };
});
</script>

<style scoped>
.deck-preview {
  background-color: var(--color-background-1);
  border-radius: var(--box-border-radius);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  max-width: 90vw;
  overflow: auto;
  position: relative;
  width: 1100px;
}

.top {
  background-color: var(--color-background-1);
  border-bottom: solid 1px var(--color-4);
  display: flex;
  position: sticky;
  top: 0;
  z-index: 5;
}

.deck-buttons {
  padding: 10px;
  overflow-y: auto;
  margin-left: auto;
}

.deck-summary-wrapper {
  padding: 20px;
  position: relative;
}

.deck-summary {
  margin: auto;
}

.deck-summary-wrapper::before {
  background-image: var(--deck-summary-background);
  background-position: center;
  background-size: cover;
  content: '';
  inset: 0;
  opacity: 40%;
  position: absolute;
}
</style>
