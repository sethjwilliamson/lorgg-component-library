<template>
  <div class="deck-highlight">
    <DeckHighlightRegions
      class="deck-highlight-regions"
      :regions="props.regions"
    ></DeckHighlightRegions>
    <DeckHighlightCards
      class="deck-highlight-cards"
      :card-codes="props.cardCodes"
    ></DeckHighlightCards>
  </div>
</template>

<script setup lang="ts">
import DeckHighlightCards from '@/lib-components/DeckHighlightCards';
import DeckHighlightRegions from '@/lib-components/DeckHighlightRegions';
import { DeckHighlightProps, deckHighlightProps } from './types';

const props: DeckHighlightProps = defineProps(deckHighlightProps);
</script>

<style scoped>
.deck-highlight {
  display: flex;
  gap: 15px;
}

.deck-highlight-regions {
  width: 85px;
}

.deck-highlight-cards {
  width: 85px;
}
</style>
