<template>
  <div class="decks-table">
    <div class="decks-heading">
      <div class="column-content deck-highlight-wrapper">Test</div>
      <div class="column-content">Test</div>
      <div class="column-content">Test</div>
      <div class="column-content">Test</div>
      <div class="column-content">Test</div>
    </div>
    <div class="deck-rows-container no-scrollbar">
      <DecksRow
        v-for="deckRow in props.deckRows"
        :key="deckRow.deckCode"
        :deckcode="deckRow.deckCode"
        :matches="deckRow.matches"
        :wins="deckRow.wins"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DecksRow from '@/lib-components/DecksRow';
import { DecksTableProps, decksTableProps } from './types';

const props: DecksTableProps = defineProps(decksTableProps);
</script>

<style scoped>
.decks-table {
  --padding: 15px;
  background-color: var(--color-background-1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: var(--padding);
}

.decks-heading {
  background-color: var(--color-3);
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  row-gap: 10px;
  width: fit-content;
  min-width: -moz-available;
  min-width: -webkit-fill-available;
  min-width: stretch;
}

.deck-rows-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: scroll;
}
</style>
