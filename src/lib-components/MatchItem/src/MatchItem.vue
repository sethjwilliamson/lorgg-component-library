<template>
  <div class="match-item">
    <div class="details">
      <div class="match-details">
        <div class="game-type">
          {{ props.gameType }}
        </div>
        <div class="time">
          {{ $dayjs(props.playedAt).fromNow() }}
        </div>
      </div>
      <div class="opponent-details">
        <!-- TODO: Add router link -->
        {{ props.opponentName }}
      </div>
    </div>
    <div class="main">
      <div class="container">
        <DeckHighlight class="deck-highlight" :deck-code="props.deckCode" />
      </div>
      <div
        class="container results"
        :style="{
          color: props.isVictory ? 'var(--color-good)' : 'var(--color-bad)',
        }"
      >
        {{ props.isVictory ? t('general.victory') : t('general.defeat') }}
      </div>
      <div class="container">
        <DeckHighlight
          class="deck-highlight opponent"
          :deck-code="props.opponentDeckCode"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MatchItemProps, matchItemProps } from './types';
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import DeckHighlight from '@/lib-components/DeckHighlight';
const { t } = useI18n();
const $dayjs = inject('dayjs') as typeof dayjs;

const props: MatchItemProps = defineProps(matchItemProps);
</script>

<style scoped>
.match-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  background-color: var(--color-background-0);
  padding: 10px;
  border-radius: 20px;
}

.details {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 5px;
}

.match-details {
  display: flex;
  gap: 10px;
  align-items: flex-end;
}

.game-type {
  color: var(--color-primary-2);
  font-weight: bold;
}

.time {
  color: var(--color-0);
  font-size: 12px;
  font-weight: bold;
}

.opponent-details {
  color: var(--color-gold);
  text-decoration: underline;
  font-weight: bold;
}

.main {
  display: flex;
  justify-content: space-between;
}

.main > .container {
  align-items: center;
  background-color: rgba(var(--color-background-2-rgb), 0.6);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.results {
  font-size: 20px;
  font-weight: bolder;
}

.deck-highlight.opponent {
  flex-direction: row-reverse;
}

@media (max-width: 769px) {
  .main {
    flex-direction: column;
  }

  .main > .container {
    background-color: unset;
  }
}
</style>
