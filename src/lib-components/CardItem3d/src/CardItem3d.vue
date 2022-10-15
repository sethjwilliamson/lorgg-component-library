<template>
  <div class="card-item-3d">
    <div class="card" :class="cardClass">
      <div class="front face" :style="frontStyle"></div>
      <div class="back face" :style="backStyle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RegionNameRefs } from '#/jsons';
import { propsToCard } from '@/helpers/functions';
import { computed, ComputedRef, StyleValue } from 'vue';
import { cardItem3dProps, CardItem3dProps } from './types';

const props: CardItem3dProps = defineProps(cardItem3dProps);

const cardBacks = {
  ShadowIsles:
    'https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/LoR_Shadow_Isles_Card_Back.png',
  BandleCity:
    'https://static.wikia.nocookie.net/leagueoflegends/images/c/c4/LoR_Bandle_City_Card_Back.png',
  Bilgewater:
    'https://static.wikia.nocookie.net/leagueoflegends/images/2/24/LoR_Bilgewater_Card_Back.png',
  Demacia:
    'https://static.wikia.nocookie.net/leagueoflegends/images/6/62/LoR_Demacia_Card_Back.png',
  Freljord:
    'https://static.wikia.nocookie.net/leagueoflegends/images/5/5e/LoR_Freljord_Card_Back.png',
  Ionia:
    'https://static.wikia.nocookie.net/leagueoflegends/images/3/3d/LoR_Ionia_Card_Back.png',
  Noxus:
    'https://static.wikia.nocookie.net/leagueoflegends/images/5/50/LoR_Noxus_Card_Back.png',
  PiltoverZaun:
    'https://static.wikia.nocookie.net/leagueoflegends/images/5/57/LoR_Piltover_Card_Back.png',
  Shurima:
    'https://static.wikia.nocookie.net/leagueoflegends/images/0/0c/LoR_Shurima_Card_Back.png',
  Targon:
    'https://static.wikia.nocookie.net/leagueoflegends/images/a/a6/LoR_Targon_Card_Back.png',
};

const frontStyle: ComputedRef<StyleValue> = computed(() => {
  const card = propsToCard(undefined, props.cardCode);
  const region = card.value.regionRefs[0] as RegionNameRefs;
  return {
    content: `url(${
      cardBacks[region] ??
      'https://static.wikia.nocookie.net/leagueoflegends/images/2/2d/LoR_Summoner%27s_Rift_Order_Card_Back.png'
    })`,
  };
});

const backStyle: ComputedRef<StyleValue> = computed(() => {
  return {
    'background-image': `url("https://lor.gg/storage/cards/card/en_us/${props.cardCode}.webp")`,
    'background-size': 'cover',
  };
});

const cardClass: ComputedRef<Array<string>> = computed(() => {
  return props.flipped ? ['flipped'] : [];
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.card-item-3d {
  aspect-ratio: 643 / 969;
  position: relative;
  -webkit-perspective: 400px;
  perspective: 400px;
}
.card {
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 1s var(--transition-1), filter 0.3s linear;
  transition: all 1s var(--transition-1), filter 0.3s linear;
  border-radius: 10px;
}
.card:not(.flipped):hover {
  filter: drop-shadow(0px 0px 15px var(--color-gold));
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

  transition: background-image 1s cubic-bezier(1, 0, 1, -1);
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
  /* -webkit-transition: all 1s var(--transition-1);
  transition: all 1s var(--transition-1); */
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
