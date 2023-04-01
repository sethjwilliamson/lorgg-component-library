<template>
  <div ref="revealCarousel" class="reveal-carousel">
    <Swiper
      slides-per-view="auto"
      :space-between="15"
      :centered-slides="centerSlides"
      :navigation="true"
      :modules="modules"
    >
      <SwiperSlide v-for="cardCode in props.cardCodes" :key="cardCode">
        <CardItem
          class="card-item-called"
          :card-code-prop="cardCode"
          :is-root="true"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper/css/override.css';

import { revealCarouselProps, RevealCarouselProps } from './types';
import CardItem from '@/lib-components/CardItem';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props: RevealCarouselProps = defineProps(revealCarouselProps);
const modules = [Navigation];

const revealCarousel = ref<HTMLElement | null>(null);
const clientWidth = ref(revealCarousel.value?.clientWidth);

const centerSlides = computed(() => {
  if (clientWidth.value === undefined) {
    return true;
  }

  return clientWidth.value < 400;
});

function handleResize() {
  clientWidth.value = revealCarousel.value?.clientWidth;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.swiper .swiper-slide {
  width: 220px;
}
.swiper .card-item-called {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.swiper > .swiper-button-next,
.swiper > .swiper-button-prev {
  background-color: aliceblue;
}
</style>
