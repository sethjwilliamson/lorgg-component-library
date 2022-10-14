<template>
  <div class="deck">
    <div
      class="card clickcard"
      :class="flipped ? 'flipped' : null"
      @click="flipped = !flipped"
    >
      <div class="front face" :style="frontStyle"></div>
      <div class="back face" :style="backStyle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { cardItem3dProps, CardItem3dProps } from './types';

const props: CardItem3dProps = defineProps(cardItem3dProps);
const flipped = ref(true);

const frontStyle = {
  content: `url(https://static.wikia.nocookie.net/leagueoflegends/images/3/3d/LoR_Ionia_Card_Back.png)`,
};
const backStyle = {
  content: `url(https://lor.gg/storage/cards/card/en_us/02IO006.webp)`,
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.deck {
  aspect-ratio: 643 / 969;
  width: 300px;
  position: relative;
  -webkit-perspective: 400px;
  perspective: 400px;
}
.card {
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 1s var(--transition-flip);
  transition: all 1s var(--transition-flip);
  border-radius: 10px;
}
.face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.back {
  overflow: hidden;
  z-index: -1;
  display: block;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  box-sizing: border-box;
}
.back:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: 100% 100%;
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front,
.back {
  -webkit-transition: all 1s var(--transition-flip);
  transition: all 1s var(--transition-flip);
}
.front {
  z-index: 1;
}
.flipped,
.hovercard:hover {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>
