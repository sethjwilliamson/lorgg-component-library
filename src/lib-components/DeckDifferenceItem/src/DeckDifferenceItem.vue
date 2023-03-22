<template>
  <div class="deck-difference-item">
    <CircleCardItem
      :card-code-prop="props.cardCodeProp"
      :card-prop="props.cardProp"
      :regions="props.regions"
      :ignore-card-item="props.ignoreCardItem"
    />
    <div
      class="difference"
      :class="props.difference > 0 ? 'positive' : 'negative'"
    >
      {{ `${props.difference > 0 ? '+' : ''}${props.difference}` }}
    </div>
  </div>
</template>

<script setup lang="ts">
import CircleCardItem from '@/lib-components/CircleCardItem';
import { DeckDifferenceItemProps, deckDifferenceItemProps } from './types';

const props: DeckDifferenceItemProps = defineProps(deckDifferenceItemProps);
</script>

<style scoped>
.deck-difference-item {
  position: relative;
}

.difference {
  position: absolute;
  bottom: 0;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 15px;
  font-size: 12px;
  color: var(--color-primary-2);
  font-weight: bold;
}

.difference.positive {
  background-color: var(--color-good);
  border-radius: 5px;
}

.difference.negative {
  background-color: var(--color-bad);
  border-radius: 5px;
}
</style>
