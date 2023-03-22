<template>
  <div class="deck-builder-summary">
    <DeckBuilderSummaryType :type-summary="typeChampions" />
    <DeckBuilderSummaryType :type-summary="typeFollowers" />
    <DeckBuilderSummaryType :type-summary="typeSpells" />
    <DeckBuilderSummaryType :type-summary="typeLandmark" />
    <DeckBuilderSummaryType :type-summary="typeEquipment" />
    <DeckBuilderSummaryType :type-summary="typeDeck" />
  </div>
</template>

<script setup lang="ts">
import { CardJsonCard } from '#/jsons';
import DeckBuilderSummaryType from '@/lib-components/DeckBuilderSummaryType';
import {
  DeckCardType,
  TypeSummary,
} from '@/lib-components/DeckBuilderSummaryType/src/types';
import { computed } from 'vue';
import { DeckBuilderSummaryProps, deckBuilderSummaryProps } from './types';

const props: DeckBuilderSummaryProps = defineProps(deckBuilderSummaryProps);

function summaryType(
  filterFn: (value: CardJsonCard) => boolean,
  isErrorFn: (quantity: number) => boolean,
  typeRef: DeckCardType,
) {
  const quantity = props.cards
    .filter(filterFn)
    .map((x) => props.deck[x.cardCode])
    .reduce((prev, curr) => prev + curr, 0);

  return {
    typeRef,
    quantity,
    isError: isErrorFn(quantity),
  } as TypeSummary;
}

const typeChampions = computed(() =>
  summaryType(
    (x) => x.typeRef === 'Unit' && x.supertype === 'Champion',
    (x) => x > 6,
    'Champion',
  ),
);
const typeFollowers = computed(() =>
  summaryType(
    (x) => x.typeRef === 'Unit' && x.supertype === '',
    () => false,
    'Follower',
  ),
);
const typeSpells = computed(() =>
  summaryType(
    (x) => x.typeRef === 'Spell',
    () => false,
    'Spell',
  ),
);
const typeLandmark = computed(() =>
  summaryType(
    (x) => x.typeRef === 'Landmark',
    () => false,
    'Landmark',
  ),
);
const typeEquipment = computed(() =>
  summaryType(
    (x) => x.typeRef === 'Equipment',
    () => false,
    'Equipment',
  ),
);
const typeDeck = computed(() =>
  summaryType(
    () => true,
    (x) => x !== 40,
    'Deck',
  ),
);
</script>

<style scoped>
.deck-builder-summary {
  display: flex;
  gap: 5px;
}
</style>
