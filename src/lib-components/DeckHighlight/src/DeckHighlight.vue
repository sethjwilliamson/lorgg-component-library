<template>
  <div class="deck-highlight">
    <DeckHighlightRegions
      class="deck-highlight-regions"
      :regions="regions"
    ></DeckHighlightRegions>
    <DeckHighlightCards
      class="deck-highlight-cards"
      :cards="champions"
      :regions="regions"
    ></DeckHighlightCards>
    <FontAwesomeIcon
      ref="eyeIcon"
      icon="eye"
      class="icon"
      @click="onEyeClick"
    />

    <div ref="deckSummary" class="deck-summary-wrapper">
      <DeckSummary
        v-if="hasShown"
        class="deck-summary"
        :deck="deck"
        :cards-prop="cards"
      ></DeckSummary>
    </div>

    <ModalItem v-model:show-modal="showModal">
      <DeckPreview :cards="cards" :deck="deck" :deck-code="props.deckCode" />
    </ModalItem>
  </div>
</template>

<script setup lang="ts">
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getMostImportantCards,
  getRegions,
  isAChampion,
} from '@/helpers/functions';
import DeckSummary from '@/lib-components/Deck/DeckSummary';
import DeckHighlightCards from '@/lib-components/DeckHighlightCards';
import DeckHighlightRegions from '@/lib-components/DeckHighlightRegions';
import DeckPreview from '@/lib-components/DeckPreview';
import ModalItem from '@/lib-components/ModalItem';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import tippy from 'tippy.js';
import { computed, onMounted, ref } from 'vue';
import { DeckHighlightProps, deckHighlightProps } from './types';

const props: DeckHighlightProps = defineProps(deckHighlightProps);

const deckSummary = ref<HTMLElement | null>(null);
const eyeIcon = ref<InstanceType<typeof FontAwesomeIcon> | null>(null);

const hasShown = ref(false);
const showModal = ref(false);

const deck = computed(() => {
  if (props.deck) {
    return props.deck;
  }

  return getDeckObjectFromCode(props.deckCode);
});
const cards = computed(() => {
  if (props.cards) {
    return props.cards;
  }

  return getCardsFromDeck(deck.value);
});
const regions = computed(() => {
  return getRegions(cards.value);
});
const champions = computed(() => {
  return cards.value.filter((x) => {
    return isAChampion(x);
  });
});

onMounted(() => {
  tippy(eyeIcon.value?.$el as HTMLElement, {
    content: deckSummary.value as HTMLElement,
    arrow: true,
    duration: 0,
    maxWidth: '90vw',
    // appendTo: 'parent',
    onShow() {
      hasShown.value = true;
    },
    onCreate(instance) {
      instance.popper.style.setProperty(
        '--tippy-background',
        `url(https://lor.gg/storage/cards/full-art/${
          getMostImportantCards(cards.value, deck.value, 1)[0].cardCode
        }.webp)`,
      );
    },
  });
});

function onEyeClick() {
  showModal.value = true;
}
</script>

<style scoped>
.deck-highlight {
  align-items: center;
  display: flex;
  gap: 15px;
}

.deck-highlight-regions {
  width: 85px;
}

.deck-highlight-cards {
  width: 85px;
}

.icon {
  color: var(--color-primary-2);
}

.deck-summary {
  --card-slice-width: 260px;
}
</style>
