<template>
  <!-- TODO: Add RounterLink -->
  <localized-link :to="'routerLink'">
    <div ref="cardSlice" :class="cardSliceClasses">
      <div class="card-slice">
        <div
          class="card-image"
          :style="{ 'background-image': `url(${imageSrc})` }"
        ></div>

        <div
          class="region-gradient"
          :style="{ background: colorGradient }"
        ></div>

        <div
          v-if="props.manaNumber !== undefined && props.manaNumber !== null"
          class="mana-hexagon"
        >
          <mana-hexagon-icon class="hexagon-icon"></mana-hexagon-icon>
          <div class="mana-number">{{ props.manaNumber }}</div>
        </div>

        <div class="card-name">
          {{ props.name }}
        </div>

        <div
          v-if="
            props.quantityNumber !== undefined && props.quantityNumber !== null
          "
          class="quantity"
        >
          <div class="quantity-background">
            <p class="num-quantity">
              {{ props.quantityNumber }}
            </p>
          </div>
        </div>

        <div v-if="props.showPlusMinus" class="plus-minus" @click.prevent>
          <div class="plus-minus-content">
            <div
              class="plus-minus-icon"
              @click.prevent="$emit('cardupdate', card.cardCode, -1)"
            >
              <font-awesome-icon :icon="'minus'" class="icon" />
            </div>
            <div
              class="plus-minus-icon"
              @click.prevent="$emit('cardupdate', card.cardCode, +1)"
            >
              <font-awesome-icon :icon="'plus'" class="icon" />
            </div>
            <div class="plus-minus-quantity">
              {{ props.quantityNumber }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="cardItemWrapper" class="card-item-container">
      <CardItem
        v-if="!ignoreCardItem"
        ref="cardItem"
        :is-root="true"
        :card-prop="card"
        :quantity-needed="props.quantityNumber"
        :show-tippy-location="showTippyLocation"
        class="card-image-hover"
      />
    </div>
  </localized-link>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import { propsToCard } from '@/helpers/functions';
import CardItem from '@/lib-components/CardItem/src/CardItem.vue';
import { computed, ComputedRef, onMounted, ref } from 'vue';
import { cardSliceItemProps, CardSliceItemProps } from './types';
import { ShowTippyLocation } from '@/lib-components/CardItem/src/CardItemProps';
import ManaHexagonIcon from '@/lib-components/icons/ManaHexagonIcon/src/ManaHexagonIcon.vue';

const props: CardSliceItemProps = defineProps(cardSliceItemProps);
const card = propsToCard(props.cardProp, props.cardCodeProp);

defineEmits<{
  (e: 'cardupdate', value: number): void;
}>();

const cardSlice = ref<HTMLElement | null>(null);
const cardItem = ref<HTMLElement | null>(null);
const cardItemWrapper = ref<HTMLElement | null>(null);
const showTippyLocation = ref<ShowTippyLocation>(null);

const colorGradient: ComputedRef<string> = computed(() => {
  const color = props.color || 'var(--color-3-rgb)';

  return `linear-gradient(90deg, rgba(${color}, 1) 0%, rgba(${color}, 1) 30%, rgba(${color}, .10) 70%, rgba(${color}, .00) 100%)`;
});

const imageSrc: ComputedRef<string> = computed(() => {
  return (
    'https://lor.gg/storage/cards/slice/' + card.value.cardCode + '-slice.webp'
  );
});

const cardSliceClasses: ComputedRef<Array<string>> = computed(() => {
  const classes = ['card-slice-wrapper'];

  if (props.maintainAspectRatio) {
    classes.push('maintain-aspect-ratio');
  }

  return classes;
});

onMounted(() => {
  if (props.ignoreCardItem) {
    return;
  }

  tippy(cardSlice.value as HTMLElement, {
    content: cardItemWrapper.value as HTMLElement,
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
.card-slice-wrapper {
  background-color: var(--color-background-2);
  border-radius: var(--border-radius-m);
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.maintain-aspect-ratio {
  height: unset;
  padding-top: 16.66667%;
}
.card-slice {
  align-items: center;
  display: flex;
  gap: 10px;
  inset: 0;
  padding: 0 15px;
  position: absolute;
}
.card-image {
  background-position: right;
  background-size: cover;
  inset: 0 0 0 30%;
  position: absolute;
}
.region-gradient {
  inset: 0;
  position: absolute;
}
.mana-hexagon {
  height: 75%;
  position: relative;
}
.hexagon-icon {
  height: 100%;
  width: unset;
}
.mana-number {
  align-items: center;
  color: var(--color-primary-2);
  display: flex;
  font-size: 100%;
  font-weight: 600;
  inset: 0;
  justify-content: center;
  position: absolute;
}
.card-name {
  color: var(--color-primary-2);
  font-size: 16px;
  font-weight: 500;
  text-shadow: 2px 2px 4px black;
  z-index: 0;
}
.quantity {
  display: flex;
  height: 45%;
  max-height: 35px;
  position: absolute;
  right: 0;
  width: 30px;
}
.quantity-background {
  align-items: center;
  background-color: var(--color-3);
  border-radius: 5px 0 0 5px;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
}
.num-quantity {
  color: var(--color-primary-2);
  font-size: 14px;
  font-weight: 600;
}
.insufficient-quantity .num-quantity {
  color: #ff006f;
}
.plus-minus {
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}
.plus-minus:hover {
  opacity: 1;
}
.plus-minus::before {
  background: linear-gradient(
    90deg,
    var(--color-background-1) 00 0%,
    var(--color-background-1) 100%
  );
  content: '';
  height: 100%;
  width: 80px;
}
.plus-minus-content {
  align-items: center;
  background-color: var(--color-background-1);
  display: flex;
  height: 100%;
  justify-content: center;
}
.plus-minus-icon {
  align-items: center;
  border-right: 2px solid rgba(var(--color-primary-2-rgb), 0.2);
  color: rgba(var(--color-primary-2-rgb), 0.6);
  cursor: pointer;
  display: flex;
  justify-content: center;
  opacity: 1;
  padding: 3px 5px;
  width: 20px;
}
.plus-minus-icon:hover {
  color: var(--color-primary-2);
}
.plus-minus-quantity {
  color: var(--color-primary-2);
  font-weight: 600;
  text-align: center;
  width: 30px;
}
</style>
