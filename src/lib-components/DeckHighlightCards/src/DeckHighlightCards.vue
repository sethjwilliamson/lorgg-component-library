<template>
  <div class="deck-highlight-cards">
    <div
      v-for="card in cards"
      :key="card.cardCode"
      class="circle-card-item-wrapper"
    >
      <CircleCardItem
        class="circle-card-item"
        :card-prop="card"
        :regions="props.regions"
      ></CircleCardItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJsonStore } from '@/helpers/stores';
import CircleCardItem from '@/lib-components/CircleCardItem';
import { computed } from 'vue';
import { DeckHighlightCardsProps, deckHighlightCardsProps } from './types';

const cardJsonObject = useJsonStore().jsons.cardJsonObject;

const props: DeckHighlightCardsProps = defineProps(deckHighlightCardsProps);

const cards = computed(() => {
  if (props.cards) {
    return props.cards;
  }

  if (props.cardCodes) {
    return props.cardCodes.map((x) => cardJsonObject[x]);
  }

  throw new Error('CardProp or CardCodeProp must be defined.');
});
</script>

<style scoped>
.deck-highlight-cards {
  --circle-card-item-size: var(--circle-card-item-size-override, 40px);
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: var(--circle-card-item-size);
  justify-content: space-between;
  padding: 0 calc(var(--circle-card-item-size) / 2);
}

.circle-card-item-wrapper {
  position: relative;
}

.circle-card-item {
  position: absolute;
  height: var(--circle-card-item-size);
  width: var(--circle-card-item-size);
  transform: translateX(-50%) translateY(-50%);
}
</style>
