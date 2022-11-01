<template>
  <div class="simulate-mulligan">
    <div class="cards-container">
      <CardItem
        v-for="(shownCard, index) in (shownCards.filter( x => x !== null) as ShownCard[])"
        :key="shownCard.cardCode + index"
        :card-code-prop="shownCard.cardCode"
        :is-root="true"
        :style="shownCard.isSelected ? { opacity: 0.5 } : null"
        @click="shownCard.isSelected = !shownCard.isSelected"
      />
    </div>
    <div class="buttons">
      <button class="primary-button" @click="replaceAll">
        {{ t('deck.replaceAllCards') }}
      </button>
      <button class="primary-button" @click="replaceSelected">
        {{ t('deck.replaceSelectedCards') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getRandomInt } from '@/helpers/functions';
import CardItem from '@/lib-components/CardItem';
import { computed, ComputedRef, ref, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { deckSummaryProps, DeckSummaryProps, ShownCard } from './types';
const { t } = useI18n();

const props: DeckSummaryProps = defineProps(deckSummaryProps);

const cards: ComputedRef<Array<string>> = computed(() => {
  const cards = [];

  for (const cardCode in props.deck) {
    for (let i = 0; i < props.deck[cardCode]; i++) {
      cards.push(cardCode);
    }
  }

  return cards;
});

const cardsMinusShownCards: ComputedRef<Array<string>> = computed(() => {
  const cardsMinusShownCardsTemp = Array.from(cards.value);

  for (const shownCard of shownCards.value) {
    if (shownCard === null) {
      continue;
    }
    cardsMinusShownCardsTemp.splice(
      cardsMinusShownCardsTemp.indexOf(shownCard.cardCode),
      1,
    );
  }

  return cardsMinusShownCardsTemp;
});

const shownCards: Ref<Array<ShownCard | null>> = ref([null, null, null, null]);

function replaceAll() {
  shownCards.value.fill(null);
  simulateMulligan();
}

function replaceSelected() {
  for (let i = 0; i < shownCards.value.length; i++) {
    if (shownCards.value[i] === null || !shownCards.value[i]?.isSelected) {
      continue;
    }

    shownCards.value[i] = null;
  }

  simulateMulligan();
}

function simulateMulligan() {
  while (shownCards.value.some((x) => x === null)) {
    shownCards.value[shownCards.value.indexOf(null)] = {
      cardCode:
        cardsMinusShownCards.value[
          getRandomInt(0, cardsMinusShownCards.value.length)
        ],
      isSelected: false,
    };
  }
  console.log(shownCards.value);
}

simulateMulligan();
</script>

<style scoped>
.simulate-mulligan {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cards-container {
  display: flex;
}
.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}
button {
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
