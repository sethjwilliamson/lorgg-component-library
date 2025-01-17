<template>
  <div class="circle-card-item">
    <a href="test/card" class="circle-card-link" @click.stop.prevent>
      <img
        ref="circleCardImg"
        :alt="card.name"
        :src="imageSrc"
        class="circle-card-img"
        :style="{ borderColor: props.colorOverride ?? regionColor }"
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
  height: var(--circle-card-item-size, 100%);
  width: var(--circle-card-item-size, 100%);
}

.circle-card-link {
  height: 100%;
  width: 100%;
}

.circle-card-img {
  border-radius: 50%;
  box-sizing: border-box;
  border: var(--circle-card-item-border-size, 2px) var(--color-primary-2) solid;
  height: inherit;
  width: inherit;
}
</style>
