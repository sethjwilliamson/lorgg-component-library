<template>
  <div class="card-stats-row">
    <CardSliceItem
      :card-code-prop="props.cardCode"
      :maintain-aspect-ratio="true"
    ></CardSliceItem>
    <div v-show="props.toggledStats.matches">
      {{ localeNumber(props.matches) }}
    </div>
    <div v-show="props.toggledStats.winrate">
      {{ localeNumber((props.wins / props.matches) * 100, 2) + '%' }}
    </div>
    <div v-show="props.toggledStats.inclusion">
      {{ localeNumber(props.inclusion * 100, 2) + '%' }}
    </div>
    <div v-show="props.toggledStats.avgCopies">
      {{ localeNumber(props.avgCopies, 2) }}
    </div>
    <div v-show="props.toggledStats.mulliganWinrate">
      {{
        props.mulliganWinrate
          ? localeNumber(props.mulliganWinrate * 100, 2) + '%'
          : '-'
      }}
    </div>
    <div v-show="props.toggledStats.keptInMulligan">
      {{
        props.keptInMulligan
          ? localeNumber(props.keptInMulligan * 100, 2) + '%'
          : '-'
      }}
    </div>
    <div v-show="props.toggledStats.drawnWinrate">
      {{
        props.drawnWinrate
          ? localeNumber(props.drawnWinrate * 100, 2) + '%'
          : '-'
      }}
    </div>
    <div v-show="props.toggledStats.turnPlayed">
      {{ props.turnPlayed ? localeNumber(props.turnPlayed, 2) : '-' }}
    </div>
    <div v-show="props.toggledStats.turnsHeld">
      {{ props.turnsHeld ? localeNumber(props.turnsHeld, 2) : '-' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { localeNumber } from '@/helpers/functions';
import CardSliceItem from '@/lib-components/CardSliceItem';
import { cardStatsRowProps, CardStatsRowProps } from './types';

const props: CardStatsRowProps = defineProps(cardStatsRowProps);
</script>

<style scoped>
.card-stats-row {
  display: flex;
  padding: 5px;
  background-color: var(--color-background-2);
  border-radius: var(--border-radius-l);
}

.card-stats-row > :first-child {
  width: 300px;
}

.card-stats-row > div {
  align-items: center;
  color: var(--color-primary-2);
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  font-weight: var(--font-weight-bold);
  justify-content: center;
  min-width: 150px;
}
</style>
