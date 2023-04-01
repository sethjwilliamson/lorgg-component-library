<template>
  <div class="built-deck-preview" :style="builtDeckPreviewStyle">
    <div class="background"></div>
    <div class="options-button">
      <FontAwesomeIcon icon="ellipsis-v"></FontAwesomeIcon>
    </div>
    <div class="deck-content">
      <DeckHighlight class="deck-highlight" :deck-code="props.deckcode" />
    </div>
    <div class="details">
      <div class="title">
        {{ props.deckName }}
      </div>
      <div class="extra-info">
        <div class="info-user">
          {{ props.userName }}
        </div>
        <div class="info-time">
          {{ $dayjs(props.updatedAt).fromNow() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DeckHighlight from '@/lib-components/DeckHighlight';
import { BuiltDeckPreviewProps, builtDeckPreviewProps } from './types';
import { computed, inject } from 'vue';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getMostImportantCards,
} from '@/helpers/functions';

const $dayjs = inject('dayjs') as typeof dayjs;

const props: BuiltDeckPreviewProps = defineProps(builtDeckPreviewProps);

const deck = computed(() => {
  return getDeckObjectFromCode(props.deckcode);
});

const cards = computed(() => {
  return getCardsFromDeck(deck.value);
});

const builtDeckPreviewStyle = computed(() => {
  return {
    '--background-image': `url(https://lor.gg/storage/cards/full-art/${
      getMostImportantCards(cards.value, deck.value, 1)[0].cardCode
    }.webp)`,
  };
});
</script>

<style scoped>
.built-deck-preview {
  --circle-card-item-size-override: 50px;
  --deck-highlight-cards-size: 105px;
  --deck-highlight-regions-size: 105px;
  --region-item-size-override: 50px;
  background-color: var(--color-background-1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow: hidden;
  position: relative;
}

.background {
  background-image: var(--background-image);
  background-size: cover;
  background-position: center;
  opacity: 0.4;
  position: absolute;
  inset: 0;
}

.built-deck-preview > div {
  filter: drop-shadow(0px 0px 2px black);
}

.options-button {
  color: var(--color-0);
  position: absolute;
  top: 15px;
  right: 15px;
}

.deck-content {
}

.deck-highlight {
  flex-direction: column;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.title {
  color: var(--color-primary-2);
  font-size: 16px;
  font-weight: bold;
}

.extra-info {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
}

.info-user {
  color: var(--color-gold);
  font-size: 14px;
}

.info-time {
  color: var(--color-primary-2);
  font-size: 13px;
}
</style>
