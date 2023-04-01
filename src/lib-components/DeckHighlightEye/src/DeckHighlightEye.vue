<template>
  <div class="deck-highlight-eye">
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
} from '@/helpers/functions';
import DeckSummary from '@/lib-components/Deck/DeckSummary';
import DeckPreview from '@/lib-components/DeckPreview';
import ModalItem from '@/lib-components/ModalItem';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import tippy from 'tippy.js';
import { computed, onMounted, ref } from 'vue';
import { DeckHighlightEyeProps, deckHighlightEyeProps } from './types';

const props: DeckHighlightEyeProps = defineProps(deckHighlightEyeProps);

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
      if (cards.value.length < 1) {
        return;
      }
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
.icon {
  color: currentColor;
}

.deck-summary {
  --card-slice-width: 260px;
}
</style>
