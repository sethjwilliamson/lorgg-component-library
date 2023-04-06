<template>
  <div class="profile-champion-row wrapper" :style="{ '--index': props.index }">
    <div
      class="small-table-background"
      :style="{ '--background-image': `url(${backgroundCard})` }"
    ></div>
    <div class="wrapper">
      <div class="champion-column column-content">
        <DeckHighlight :deck-code="props.deckCode" />
      </div>
      <div class="matches-column column-content">
        {{ localeNumber(props.matches, 0, 10) }}
      </div>
      <div
        class="winrate-column column-content"
        :style="{ color: `var(${winrateColor(props.wins / props.matches)})` }"
      >
        {{ localeNumber((props.wins / props.matches) * 100, 1, 3) }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getMostImportantCards,
  localeNumber,
  winrateColor,
} from '@/helpers/functions';
import DeckHighlight from '@/lib-components/DeckHighlight';
import { computed } from 'vue';
import { ProfileArchetypeRowProps, profileArchetypeRowProps } from './types';

const props: ProfileArchetypeRowProps = defineProps(profileArchetypeRowProps);

const deck = computed(() => {
  return getDeckObjectFromCode(props.deckCode);
});

const cards = computed(() => {
  return getCardsFromDeck(deck.value);
});

const backgroundCard = computed(() => {
  return `https://lor.gg/storage/cards/banner/${
    getMostImportantCards(cards.value, deck.value, 1)[0].cardCode
  }.png`;
});
</script>

<style scoped>
.champion-column {
  --region-item-size: 35px;
  display: flex;
  gap: 10px;
  justify-content: start;
  padding-left: 20px;
}

.circle-card-item {
  min-width: 35px;
}
</style>
