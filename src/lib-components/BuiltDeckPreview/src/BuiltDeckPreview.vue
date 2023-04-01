<template>
  <a href="/test/built-deck">
    <div class="built-deck-preview" :style="builtDeckPreviewStyle">
      <div class="background"></div>
      <DeckHighlightEye
        class="deck-highlight-eye icon"
        :deck-code="props.deckcode"
        @click.stop.prevent
      />
      <div class="options-button icon" @click.stop.prevent>
        <FontAwesomeIcon icon="ellipsis-v"></FontAwesomeIcon>
      </div>
      <div class="deck-content">
        <DeckHighlight
          class="deck-highlight"
          :show-eye="false"
          :deck-code="props.deckcode"
        />
        <div class="format-tags">
          <FormatTag v-for="format in formats" :key="format" :format="format" />
        </div>
      </div>
      <div class="details">
        <div class="title">
          {{ props.deckName }}
        </div>
        <div class="extra-info">
          <div class="info-user" @click.stop.prevent>
            <a href="test/user">
              {{ props.userName }}
            </a>
          </div>
          <div class="info-time">
            {{ $dayjs(props.updatedAt).fromNow() }}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import DeckHighlight from '@/lib-components/DeckHighlight';
import { BuiltDeckPreviewProps, builtDeckPreviewProps } from './types';
import { computed, inject } from 'vue';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  getCardsFromDeck,
  getDeckFormats,
  getDeckObjectFromCode,
  getMostImportantCards,
} from '@/helpers/functions';
import DeckHighlightEye from '@/lib-components/DeckHighlightEye';
import FormatTag from '@/lib-components/FormatTag';

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

const formats = computed(() => {
  return getDeckFormats(cards.value);
});

console.log(formats.value);
</script>

<style scoped>
.built-deck-preview {
  --circle-card-item-size-override: 50px;
  --deck-highlight-cards-size: 105px;
  --deck-highlight-regions-size: 105px;
  --region-item-size-override: 50px;
  background-color: var(--color-background-1);
  border-radius: 20px;
  border: var(--color-3) solid 2px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  padding-top: 10px;
  position: relative;
  transition: border-color 0.3s;
}

.built-deck-preview:hover {
  border-color: var(--color-gold);
  transition: border-color 0s;
}

.background {
  background-image: var(--background-image);
  background-size: cover;
  background-position: center;
  opacity: 0.4;
  position: absolute;
  inset: 0;
  z-index: 0;
}

.built-deck-preview > div {
  filter: drop-shadow(0px 0px 2px black);
}

.deck-content {
  position: relative;
}

.format-tags {
  position: absolute;
  bottom: -5px;
  left: 15px;
  display: flex;
  gap: 5px;
}

.icon {
  color: var(--color-0);
  position: absolute;
  top: 15px;
  z-index: 1;
}

.options-button {
  right: 15px;
}

.deck-highlight-eye {
  color: var(--color-primary-2);
  left: 15px;
}

.deck-highlight {
  flex-direction: column;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  background-color: var(--color-background-2);
  border-top: var(--color-gold) 1px solid;
  z-index: 0;
}

.title {
  color: var(--color-primary-2);
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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

.info-user > a {
  color: currentColor;
}

.info-time {
  color: var(--color-primary-2);
  font-size: 13px;
}
</style>
