<template>
  <div
    class="card-item-container"
    @mouseover="mouseOver = true"
    @mouseleave="mouseOver = false"
  >
    <img
      ref="cardItem"
      :alt="card.name"
      class="card-item"
      :class="cardImageClass"
      :src="
        'https://lor.gg/storage/cards/card/' +
        'en_us' +
        '/' +
        card.cardCode +
        '.webp'
      "
    />

    <div
      v-if="
        (isDeckBuilder || userCardQuantity != undefined) && card.collectible
      "
      class="quantity-ticks-container"
    >
      <div
        v-for="i in 3"
        :key="i"
        class="quantity-tick"
        :class="quantityTickClass(i)"
      ></div>
    </div>

    <div
      v-if="showDetailsOnHover"
      ref="cardInfo"
      :class="showRelatedCards ? null : 'card-info'"
    >
      <div v-if="!showRelatedCards">
        <div
          v-if="quantityPossessed !== undefined"
          class="card-info-quantity-possessed"
        >
          {{ 'You have: ' }}
          <b :class="quantityNeededClass">
            {{ quantityPossessed + ' / ' + (quantityNeeded || 3) }}
          </b>
        </div>
        <hr
          v-if="
            quantityPossessed !== undefined &&
            (card.keywordRefs.length > 0 || card.associatedCardRefs.length > 0)
          "
          class="line"
        />

        <div
          v-for="keyword in keywordObjects"
          :key="keyword.nameRef"
          class="card-info-section"
        >
          <h4 class="card-info-title">{{ keyword.name }}</h4>
          <p class="card-info-text">{{ keyword.description }}</p>
        </div>

        <hr
          v-if="
            card.keywordRefs.length > 0 && card.associatedCardRefs.length > 0
          "
          class="line"
        />

        <div v-if="card.associatedCardRefs.length > 0" class="card-info-text">
          {{ 'Hold Shift to see Associated Cards' }}
        </div>
      </div>
      <div v-else class="associated-card-container">
        <CardItem
          v-for="associatedCard in associatedCards"
          :key="associatedCard.cardCode"
          :card-code-prop="associatedCard.cardCode"
          :is-deck-builder="false"
          :is-root="false"
          class="associated-card"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: Fix
import { Instance, Props } from 'tippy.js';
import tippy from 'tippy.js';
import { DataJsonKeyword, CardJsonCard } from '#/jsons';
import { useJsonStore } from '@/helpers/stores';
import { computed, ComputedRef, onMounted, ref } from 'vue';
import { CardItemProps, props as cardItemProps } from './CardItemProps';
import { propsToCard } from '@/helpers/functions';
import { watch } from 'vue';

const props: CardItemProps = defineProps(cardItemProps);

const cardItem = ref<HTMLElement | null>(null);
const cardInfo = ref<HTMLElement | null>(null);

const store = useJsonStore();

const mouseOver = false;
let cardItemTippy: Instance<Props> | null = null;
const showRelatedCards = ref(false);

const card = propsToCard(props.cardProp, props.cardCodeProp);

const quantityNeededClass: ComputedRef<'bad' | null> = computed(() => {
  if (
    props.quantityNeeded != undefined &&
    props.userCardQuantity != undefined &&
    card.value.cardCode in props.userCardQuantity &&
    props.quantityNeeded > props.userCardQuantity[card.value.cardCode]
  ) {
    return 'bad';
  }

  return null;
});

const associatedCards: ComputedRef<Array<CardJsonCard>> = computed(() => {
  const associatedCards = [];

  if (props.isRoot) {
    for (const associatedCardCode of card.value.associatedCardRefs) {
      associatedCards.push(store.jsons.cardJsonObject[associatedCardCode]);
    }
  }

  return associatedCards;
});

const keywordObjects: ComputedRef<Array<DataJsonKeyword>> = computed(() => {
  const keywordObjects = [];

  for (const keywordRef of card.value.keywordRefs) {
    const keywordObject = store.jsons.dataJson.keywords.find(
      (x) => x.nameRef === keywordRef,
    );

    if (keywordObject) {
      keywordObjects.push(keywordObject);
    }
  }

  return keywordObjects;
});

const showDetailsOnHover: ComputedRef<boolean> = computed(() => {
  return (
    props.isRoot &&
    (props.userCardQuantity != undefined ||
      card.value.keywordRefs.length > 0 ||
      card.value.associatedCardRefs.length > 0)
  );
});

const quantityPossessed: ComputedRef<number> = computed(() => {
  if (
    props.userCardQuantity == undefined ||
    !(card.value.cardCode in props.userCardQuantity)
  ) {
    return 0;
  }

  return props.userCardQuantity[card.value.cardCode];
});

const cardImageClass: ComputedRef<'disabled' | null> = computed(() => {
  if (props.isDeckBuilder && props.deckList[card.value.cardCode] === 3) {
    return 'disabled';
  }

  return null;
});

watch(
  () => props.showTippyLocation,
  (newValue) => {
    if (!cardItemTippy) {
      return;
    }

    if (newValue) {
      cardItemTippy.setProps({
        placement: newValue,
      });
      cardItemTippy.show();
    } else {
      cardItemTippy.hide();
    }
  },
);

function keyUpRelatedCards() {
  window.addEventListener('keyup', (e) => {
    if (e.key == 'Shift') {
      showRelatedCards.value = false;
    }
  });
}

function keyDownRelatedCards() {
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Shift') {
      showRelatedCards.value = true;
    }
  });
}

function quantityTickClass(index: number) {
  if (props.isDeckBuilder) {
    if (
      !(card.value.cardCode in props.deckList) ||
      index > props.deckList[card.value.cardCode]
    ) {
      return 'disabled';
    }

    return null;
  }

  if (index > quantityPossessed.value) {
    return 'disabled';
  }

  return null;
}

onMounted(() => {
  if (
    props.userCardQuantity != undefined ||
    card.value.keywordRefs.length > 0 ||
    card.value.associatedCardRefs.length > 0
  ) {
    cardItemTippy = tippy(cardItem.value as HTMLElement, {
      allowHTML: true,
      content: cardInfo.value as HTMLElement,
      placement: 'right-start',
      duration: 0,
      role: 'card-info',
      maxWidth: '50vw',
    });
  }

  if (card.value.associatedCardRefs.length > 0) {
    keyUpRelatedCards();
    keyDownRelatedCards();
  }
});
</script>

<style scoped>
.card-item-container {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.1s;
}

.card-item-container:hover {
  transform: scale(1.05);
}

.card-item {
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.quantity-ticks-container {
  display: flex;
  margin: 5px auto 0;
  gap: 5px;
}

.quantity-tick {
  background-color: var(--color-primary);
  border-radius: var(--border-radius-m);
  height: 10px;
  width: 10px;
}

.card-info {
  width: 20vh;
}

.card-info-section {
  margin-bottom: 10px;
}

.card-info-section:last-child {
  margin-bottom: 0;
}

.card-info-title {
  color: var(--color-primary-2);
  margin: 0;
  margin-bottom: 5px;
}

.card-info-text {
  color: var(--color-0);
  margin: 0;
}

.line {
  background-color: var(--color-0);
  border: none;
  color: var(--color-0);
  height: 2px;
}

.associated-card-container {
  display: flex;
}

.associated-card {
  width: 20vh;
}
</style>
