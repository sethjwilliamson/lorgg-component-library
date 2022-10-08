<template>
  <div class="circle-card-item">
    <a class="circle-card-link">
      <img
        ref="circleCardImg"
        :alt="card.name"
        :src="imageSrc"
        class="circle-card-img"
        :style="{ 'border-color': regionColor }"
      />
    </a>

    <div ref="circleCardTippy" class="circle-card-tippy">
      <CardItem
        v-if="!ignoreCardItem"
        ref="cardItem"
        :card-code-prop="card.cardCode"
        :is-deck-builder="false"
        :is-root="true"
        :show-tippy-location="showTippyLocation"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import { getRegionColorOfCard, propsToCard } from '@/helpers/functions';
import CardItem from '@/lib-components/CardItem/src/CardItem.vue';
import { computed, ComputedRef, onMounted, ref } from 'vue';
import { CircleCardItemProps, circleCardItemProps } from './types';
import { ShowTippyLocation } from '@/lib-components/CardItem/src/CardItemProps';

const props: CircleCardItemProps = defineProps(circleCardItemProps);
const card = propsToCard(props.cardProp, props.cardCodeProp);

const circleCardImg = ref<HTMLElement | null>(null);
const circleCardTippy = ref<HTMLElement | null>(null);
const cardItem = ref<HTMLElement | null>(null);

const showTippyLocation = ref<ShowTippyLocation>(null);

const imageSrc: ComputedRef<string> = computed(() => {
  return (
    'https://lor.gg/storage/cards/icon/' + card.value.cardCode + '-icon.webp'
  );
});

const regionColor: ComputedRef<string> = computed(() => {
  return getRegionColorOfCard(card.value, props.regions);
});

onMounted(() => {
  if (props.ignoreCardItem) {
    return;
  }

  tippy(circleCardImg.value as HTMLElement, {
    content: circleCardTippy.value as HTMLElement,
    placement: 'right',
    arrow: true,
    touch: 'hold',
    duration: 0,
    role: 'card-image',
    onShown: (instance) => {
      const tippyLocation: ShowTippyLocation =
        instance.popper.innerHTML.includes('right')
          ? 'right-start'
          : 'left-start';

      showTippyLocation.value = tippyLocation;
    },
    onHidden: () => {
      showTippyLocation.value = null;
    },
  });
});
</script>

<style scoped>
.circle-card-item {
  width: 100%;
  height: 100%;
}

.circle-card-link {
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}

.circle-card-img {
  width: inherit;
  height: inherit;
  border-radius: 50%;
  border: 2px var(--color-white) solid;
}
</style>
