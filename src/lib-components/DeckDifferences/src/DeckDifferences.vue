<template>
  <div class="deck-differences no-scrollbar">
    <DeckDifferenceItem
      v-for="difference in props.differences"
      :card-code-prop="difference.cardCodeProp"
      :card-prop="difference.cardProp"
      :difference="difference.difference"
      :ignore-card-item="difference.ignoreCardItem"
      :regions="difference.regions"
    />
  </div>
</template>

<script setup lang="ts">
import DeckDifferenceItem from '@/lib-components/DeckDifferenceItem';
import { DeckDifferencesProps, deckDifferencesProps } from './types';

const props: DeckDifferencesProps = defineProps(deckDifferencesProps);
</script>

<style scoped>
.deck-differences {
  --circle-card-item-size: 40px;
  display: flex;
  gap: 5px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 10px;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10px,
    black calc(100% - 10px),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10px,
    black calc(100% - 10px),
    transparent 100%
  );
}
</style>
