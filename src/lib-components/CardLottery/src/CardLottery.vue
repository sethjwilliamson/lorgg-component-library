<template>
  <div class="card-lottery">
    <div
      class="card-lottery-background"
      :style="cardLotteryBackgroundStyle"
    ></div>
    <div class="cards-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card-item-3d-wrapper"
        :class="card.display.value ? null : 'hide'"
      >
        <CardItem3d
          :flipped="card.flipped.value"
          :card-code="card.cardCode.value"
          @click="cardClicked(card)"
        >
        </CardItem3d>
      </div>
    </div>
    <div v-if="chosenCardCode" class="bottom">
      <div class="slice">
        <div class="circle-slice-item-wrapper">
          <CardSliceItem
            :color="'133, 133, 133'"
            :name="'Player'"
            :card-code-prop="chosenCardCode"
            :ignore-card-item="true"
          />
        </div>
      </div>
      <div class="options">
        <button v-t="'cardLottery.setBanner'" class="primary-button"></button>
        <button v-t="'cardLottery.setIcon'" class="primary-button"></button>
        <button class="primary-button" @click="reset">
          <span v-t="'cardLottery.openAnother'"></span>
          <span> (23) </span>
        </button>
      </div>
      <div class="icon">
        <div class="circle-card-item-wrapper">
          <CircleCardItem
            :color="'133, 133, 133'"
            :card-code-prop="chosenCardCode"
            :ignore-card-item="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJsonStore } from '@/helpers/stores';
import CardItem3d from '@/lib-components/CardItem3d/src/CardItem3d.vue';
import { computed, ComputedRef, Ref, ref, StyleValue, watch } from 'vue';
import CardSliceItem from '@/lib-components/CardSliceItem/src/CardSliceItem.vue';
import CircleCardItem from '@/lib-components/CircleCardItem/src/CircleCardItem.vue';
import { CardFlip } from './types';

const cardCodes = Object.keys(useJsonStore().jsons.cardJsonObject);

const cards: CardFlip[] = [];

const chosenCardCode: Ref<string | null> = ref(null);

const cardLotteryBackgroundStyle: ComputedRef<StyleValue> = computed(() => {
  if (!chosenCardCode.value) {
    return {};
  }

  return {
    background: `url(https://lor.gg/storage/cards/full-art/${chosenCardCode.value}.webp)`,
    'background-position': 'center',
    'background-size': 'cover',
  };
});

function cardClicked(card: CardFlip) {
  chosenCardCode.value = card.cardCode.value;
  card.flipped.value = true;

  for (const card2 of cards) {
    if (card === card2) {
      continue;
    }

    setTimeout(() => {
      card2.display.value = false;
    }, 1000);
  }
}

function reset() {
  chosenCardCode.value = null;
  cards.splice(0);

  for (let i = 0; i < 3; i++) {
    cards.push({
      flipped: ref(false),
      display: ref(true),
      cardCode: ref(cardCodes[Math.floor(Math.random() * cardCodes.length)]),
    });
  }
}

reset();
</script>

<style scoped>
.card-lottery {
  max-width: 1000px;
  padding: 20px;
  position: relative;
}

.card-lottery-background {
  inset: 0;
  opacity: 50%;
  position: absolute;
  z-index: -1;
}

.cards-container {
  aspect-ratio: calc((var(--card-item-aspect-ratio-w) + 50) * 3) /
    var(--card-item-aspect-ratio-h);
  display: flex;
  justify-content: center;
  transition: all 1s linear;
  width: 100%;
}

.card-item-3d-wrapper {
  align-items: center;
  aspect-ratio: var(--card-item-aspect-ratio);
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  transition: all 0.5s linear;
}

.card-item-3d {
  animation: append-animate 0.8s var(--transition-2);
  height: 100%;
}

.hide {
  aspect-ratio: unset;
  flex-grow: 0.000001;
  height: 0;
}

.hide > .card-item-3d {
  height: 0;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.bottom > div {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
}

.circle-slice-item-wrapper {
  align-items: center;
  background-color: var(--color-1);
  border-radius: 10px;
  justify-content: center;
  max-width: 320px;
  min-width: 240px;
  padding: 10px;
  width: 100%;
}

.circle-card-item-wrapper {
  width: 100px;
}

.options {
  flex-direction: column;
  gap: 10px;
}

@keyframes append-animate {
  from {
    /* transform: scale(0); */
    /* opacity: 0; */
  }
  to {
    transform: scale(1);
    /* opacity: 1;	 */
  }
}
</style>
