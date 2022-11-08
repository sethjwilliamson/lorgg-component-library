<template>
  <div class="card-carousel">
    <Swiper
      :effect="'carousel'"
      :grab-cursor="true"
      :loop="false"
      :looped-slides="5"
      :slides-per-view="'auto'"
      :modules="modules"
      :slide-to-clicked-slide="true"
      @active-index-change="onActiveIndexChange"
    >
      <SwiperSlide v-for="cardCode in props.cardCodes" :key="cardCode">
        <img
          :src="`https://lor.gg/storage/cards/card/en_us/${cardCode}.webp`"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import EffectCarousel from './effect-carousel.esm';
import 'swiper/css';
import 'swiper/css/virtual';

import { cardCarouselProps, CardCarouselProps } from './types';
import { Swiper as SwiperT } from 'swiper/types';

const props: CardCarouselProps = defineProps(cardCarouselProps);
const emit = defineEmits<{
  (e: 'update:activeIndex', value: number): void;
}>();
console.log(props);

const modules = [EffectCarousel];

function onActiveIndexChange(e: SwiperT) {
  emit('update:activeIndex', e.activeIndex);
}
</script>

<style scoped>
.swiper-carousel .swiper-slide {
  width: 320px;
}
.swiper-carousel img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>
