<template>
  <div class="table-wrapper">
    <div class="decks-table table no-scrollbar">
      <div class="heading-background-outer">
        <div class="heading-background-absolute"></div>
        <div class="heading-background-inner"></div>
      </div>
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
  </div>
</template>
<script setup lang="ts">
import DecksRow from '@/lib-components/DecksRow';
import { DecksTableProps, decksTableProps } from './types';

const props: DecksTableProps = defineProps(decksTableProps);
</script>

<style scoped>
.decks-table {
  --background-color: var(--color-background-1);
  background-color: var(--background-color);
  gap: 10px;
  grid-auto-rows: 50px;
  grid-template-columns: repeat(5, 1fr) 50px;
  padding: 0 4px;
}
</style>
