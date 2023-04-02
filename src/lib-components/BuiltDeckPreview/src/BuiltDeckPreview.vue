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
      <DeckHighlightRegions
        class="deck-highlight-regions deck-highlight-section"
        :regions="regions"
      />
      <div class="content">
        <div class="format">
          <EternalIcon
            v-if="displayedFormat.nameRef === FormatEnum.Eternal"
            class="format-icon"
          />
          <StandardIcon
            v-else-if="displayedFormat.nameRef === FormatEnum.Standard"
            class="format-icon"
          />
          <GauntletIcon v-else class="format-icon" />
          <span class="format-text">{{ displayedFormat.name }}</span>
        </div>
        <DeckHighlightCards
          class="deck-highlight-cards deck-highlight-section"
          :cards="champions"
        />
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
import { BuiltDeckPreviewProps, builtDeckPreviewProps } from './types';
import { computed, inject } from 'vue';
import { DataJsonFormat, FormatEnum } from '../../../../types/jsons';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  getCardsFromDeck,
  getDeckFormats,
  getDeckObjectFromCode,
  getMostImportantCards,
  getRegions,
  isAChampion,
} from '@/helpers/functions';
import DeckHighlightEye from '@/lib-components/DeckHighlightEye';
import DeckHighlightRegions from '@/lib-components/DeckHighlightRegions';
import { useJsonStore } from '@/helpers/stores';
import EternalIcon from '@/lib-components/icons/EternalIcon';
import StandardIcon from '@/lib-components/icons/StandardIcon';
import GauntletIcon from '@/lib-components/icons/GauntletIcon';
import DeckHighlightCards from '@/lib-components/DeckHighlightCards';

const $dayjs = inject('dayjs') as typeof dayjs;

const props: BuiltDeckPreviewProps = defineProps(builtDeckPreviewProps);
const formatsStore = useJsonStore().jsons.dataJson.formats;

const deck = computed(() => {
  return getDeckObjectFromCode(props.deckcode);
});

const cards = computed(() => {
  return getCardsFromDeck(deck.value);
});

const regions = computed(() => {
  return getRegions(cards.value);
});

const champions = computed(() => {
  return cards.value.filter((x) => isAChampion(x));
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

const displayedFormat = computed(() => {
  return (
    formats.value
      .map((x) => formatsStore.find((y) => y.nameRef === x))
      .filter((x) => x !== undefined) as DataJsonFormat[]
  ).sort((a, b) => a.order - b.order)[0];
});

console.log(formats.value);
</script>

<style scoped>
.built-deck-preview {
  --circle-card-item-size-override: 50px;
  --region-item-size-override: 50px;
  align-items: center;
  background-color: var(--color-background-1);
  border-radius: 20px;
  border: var(--color-3) solid 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

.deck-highlight-section {
  width: 110px;
}

.icon {
  color: var(--color-primary-2);
  position: absolute;
  top: 15px;
  z-index: 1;
}

.content {
  display: flex;
  align-self: stretch;
  padding: 0 15px;
  justify-content: space-between;
  align-items: flex-end;
}

.format {
  display: flex;
  gap: 5px;
  color: var(--color-primary-2);
  align-items: center;
  text-transform: uppercase;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20px;
}

.format-icon {
  width: 30px;
  height: 30px;
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
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  background-color: var(--color-background-2);
  border-top: var(--color-primary-2) 2px solid;
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
