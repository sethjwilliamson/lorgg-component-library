<template>
  <div class="match-item">
    <div
      class="background"
      :style="{ '--background-image': `url(${backgroundCards[0]})` }"
    >
      <div
        v-for="backgroundCard in backgroundCards"
        :key="backgroundCard"
        class="background-card-wrapper"
        :style="{ '--background-image': `url(${backgroundCard})` }"
      >
        <div class="background-card"></div>
      </div>
    </div>
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
        <DeckHighlight class="deck-highlight" :deck="deck" />
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
        <DeckHighlight class="deck-highlight opponent" :deck="opponentDeck" />
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
import { computed } from 'vue';
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getMostImportantCards,
} from '@/helpers/functions';
const { t } = useI18n();
const $dayjs = inject('dayjs') as typeof dayjs;

const props: MatchItemProps = defineProps(matchItemProps);

const deck = computed(() => {
  return getDeckObjectFromCode(props.deckCode);
});

const opponentDeck = computed(() => {
  return getDeckObjectFromCode(props.opponentDeckCode);
});

const backgroundCards = computed(() => {
  return [
    getMostImportantCards(getCardsFromDeck(deck.value), deck.value, 1)[0],
    getMostImportantCards(
      getCardsFromDeck(opponentDeck.value),
      opponentDeck.value,
      1,
    )[0],
  ].map((x) => `https://lor.gg/storage/cards/banner/${x.cardCode}.png`);
});
</script>

<style scoped>
.match-item {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 10px;
  position: relative;
}

.match-item > * {
  filter: drop-shadow(0px 0px 2px black);
}

.background {
  background-color: var(--color-background-0);
  display: flex;
  overflow: hidden;
  position: absolute;
  inset: 0;
  z-index: -1;
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
  /* background-color: rgba(var(--color-background-2-rgb), 0.6); */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.results {
  background-color: rgba(var(--color-background-2-rgb), 1);
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

  .background::before {
    background-image: var(--background-image);
    background-position: center;
    background-size: cover;
    content: '';
    inset: 0;
    opacity: 40%;
    position: absolute;
  }

  .background > div {
    display: none;
  }
}
</style>
