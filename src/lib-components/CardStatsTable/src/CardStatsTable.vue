<template>
  <div class="card-stats-table no-scrollbar">
    <div class="heading-wrapper">
      <CardStatsHeading
        :toggled-stats="props.toggledStats"
        :current-sort="props.currentSort"
        :is-sort-desc="props.isSortDesc"
      />
    </div>
    <div class="rows no-scrollbar">
      <CardStatsRow
        v-for="cardData in props.cardStatsData"
        :key="cardData.cardCode"
        :toggled-stats="props.toggledStats"
        :card-code="cardData.cardCode"
        :matches="cardData.matches"
        :wins="cardData.wins"
        :inclusion="cardData.inclusion"
        :avg-copies="cardData.avgCopies"
        :mulligan-winrate="cardData.mulliganWinrate"
        :kept-in-mulligan="cardData.kept"
        :drawn-winrate="cardData.drawnWinrate"
        :turns-held="cardData.turnsHeld"
        :turn-played="cardData.turnPlayed"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardStatsHeading from '@/lib-components/CardStatsHeading';
import CardStatsRow from '@/lib-components/CardStatsRow';
import { cardStatsTableProps, CardStatsTableProps } from './types';

const props: CardStatsTableProps = defineProps(cardStatsTableProps);
</script>

<style scoped>
.card-stats-table {
  background-color: var(--color-background-1);
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  padding: 10px;
  position: relative;
  width: 100%;
}

.rows {
  bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: calc(100% - 20px);
  overflow-y: auto;
  position: absolute;
  top: 65px;
}
</style>
