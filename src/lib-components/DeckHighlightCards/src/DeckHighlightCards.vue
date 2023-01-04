<template>
  <div class="deck-highlight-cards">
    <div
      v-for="cardCode in props.cardCodes"
      :key="cardCode"
      class="circle-card-item-wrapper"
    >
      <CircleCardItem
        class="circle-card-item"
        :card-code-prop="cardCode"
      ></CircleCardItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import CircleCardItem from '@/lib-components/CircleCardItem';
import { DeckHighlightCardsProps, deckHighlightCardsProps } from './types';

const props: DeckHighlightCardsProps = defineProps(deckHighlightCardsProps);
</script>

<style scoped>
.deck-highlight-cards {
  --circle-card-item-size: 40px;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: var(--circle-card-item-size);
  justify-content: space-between;
  padding: 0 calc(var(--circle-card-item-size) / 2);
}

.circle-card-item-wrapper {
  position: relative;
}

.circle-card-item {
  position: absolute;
  height: var(--circle-card-item-size);
  width: var(--circle-card-item-size);
  transform: translateX(-50%) translateY(-50%);
}
</style>
