<template>
  <div class="card-stats-row">
    <CardSliceItem
      :card-code-prop="props.cardCode"
      :maintain-aspect-ratio="true"
    ></CardSliceItem>
    <div v-show="props.toggledStats.matches" class="column-content">
      {{ localeNumber(props.matches) }}
    </div>
    <div v-show="props.toggledStats.winrate" class="column-content">
      {{ localeNumber((props.wins / props.matches) * 100, 2, 3) + '%' }}
    </div>
    <div v-show="props.toggledStats.inclusion" class="column-content">
      {{ localeNumber(props.inclusion * 100, 2, 3) + '%' }}
    </div>
    <div v-show="props.toggledStats.avgCopies" class="column-content">
      {{ localeNumber(props.avgCopies, 2, 3) }}
    </div>
    <div v-show="props.toggledStats.mulliganWinrate" class="column-content">
      {{
        props.mulliganWinrate
          ? localeNumber(props.mulliganWinrate * 100, 2, 3) + '%'
          : '-'
      }}
    </div>
    <div v-show="props.toggledStats.keptInMulligan" class="column-content">
      {{
        props.keptInMulligan
          ? localeNumber(props.keptInMulligan * 100, 2, 3) + '%'
          : '-'
      }}
    </div>
    <div v-show="props.toggledStats.drawnWinrate" class="column-content">
      {{
        props.drawnWinrate
          ? localeNumber(props.drawnWinrate * 100, 2, 3) + '%'
          : '-'
      }}
    </div>
    <div v-show="props.toggledStats.turnPlayed" class="column-content">
      {{ props.turnPlayed ? localeNumber(props.turnPlayed, 2, 3) : '-' }}
    </div>
    <div v-show="props.toggledStats.turnsHeld" class="column-content">
      {{ props.turnsHeld ? localeNumber(props.turnsHeld, 2, 3) : '-' }}
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
  width: fit-content;
  min-width: calc(100% - 10px);
}

.card-stats-row > :first-child {
  width: 300px;
  min-width: 300px;
}

.card-stats-row > div {
  align-items: center;
  color: var(--color-primary-2);
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  font-weight: var(--font-weight-bold);
  justify-content: center;
  min-width: 200px;
}
</style>
