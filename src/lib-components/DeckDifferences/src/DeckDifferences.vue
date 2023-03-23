<template>
  <div class="deck-differences">
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
  display: flex;
  gap: 5px;
  height: 40px;
}
</style>
