<template>
  <div class="decks-table table no-scrollbar">
    <div class="heading-background"></div>
    <div class="heading wrapper">
      <div class="heading-cell column-content">Test</div>
      <div class="heading-cell column-content">Test</div>
      <div class="heading-cell column-content">Test</div>
      <div class="heading-cell column-content">Test</div>
      <div class="heading-cell column-content">Test</div>
    </div>
    <DecksRow
      v-for="(deckRow, index) in props.deckRows"
      :key="deckRow.deckCode"
      :deckcode="deckRow.deckCode"
      :matches="deckRow.matches"
      :wins="deckRow.wins"
      :index="index + 2"
    />
  </div>
</template>
<!--  Set grid layout, header uses it, row containers use it with span all, rows use it -->
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

.heading-cell {
  grid-row: 1;
}

.heading-background {
  background-color: var(--color-3);
  border-radius: 25px;
  grid-row: 1;
  grid-column: 1 / -1;
}
</style>
