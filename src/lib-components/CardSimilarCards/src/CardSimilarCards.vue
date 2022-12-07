<template>
  <div class="card-similar-cards">
    <CardItem
      v-for="card in similarCards"
      :key="card.cardCode"
      :card-prop="card"
      :is-root="true"
    ></CardItem>
    <!-- {{ similarCards }} -->
  </div>
</template>

<script setup lang="ts">
import { CardJsonCard } from '#/jsons';
import { useJsonStore } from '@/helpers/stores';
import CardItem from '@/lib-components/CardItem';
import { ComputedRef, computed } from 'vue';
import {
  CardCodePoints,
  CardSimilarCardsProps,
  cardSimilarCardsProps,
} from './types';

const cardJsonObject = useJsonStore().jsons.cardJsonObject;
const props: CardSimilarCardsProps = defineProps(cardSimilarCardsProps);

function addToCardCodePoints(
  cardCodePoints: CardCodePoints[],
  cardCode: string,
  points: number,
) {
  // Return if the points value is lower than the current lowest
  if (cardCodePoints.length === 10 && points < cardCodePoints[0].points) {
    return;
  }

  // Find the index in the array where the value should be inserted
  let index = 0;
  while (
    index < cardCodePoints.length &&
    cardCodePoints[index].points < points
  ) {
    index++;
  }

  // Insert the value at the determined index
  cardCodePoints.splice(index, 0, {
    cardCode,
    points,
  });

  // Remove the lowest points value when the length is >10
  if (cardCodePoints.length > 10) {
    cardCodePoints.splice(0, 1);
  }
}

const similarCards: ComputedRef<CardJsonCard[]> = computed(() => {
  const cardCodePoints: CardCodePoints[] = [];

  let points = 0;
  for (const cardCode in cardJsonObject) {
    if (cardCode === props.card.cardCode) {
      continue;
    }

    if (props.card.collectible && !cardJsonObject[cardCode].collectible) {
      continue;
    }

    points = 0;

    const currentCard = cardJsonObject[cardCode];

    for (const currentCardRegionRef of currentCard.regionRefs) {
      for (const cardRegionRef of props.card.regionRefs) {
        if (currentCardRegionRef === cardRegionRef) {
          points += 2;
        }
      }
    }

    for (const currentCardSubtypeRef of currentCard.subtypeRefs) {
      for (const cardSubtypeRef of props.card.subtypeRefs) {
        if (currentCardSubtypeRef === cardSubtypeRef) {
          points += 2;
        }
      }
    }

    for (const currentCardKeywordRef of currentCard.keywordRefs) {
      for (const cardKeywordRef of props.card.keywordRefs) {
        if (currentCardKeywordRef === cardKeywordRef) {
          points += 1;
        }
      }
    }

    if (currentCard.typeRef === props.card.typeRef) {
      points += 3;
    }

    if (
      currentCard.rarityRef !== 'None' &&
      currentCard.rarityRef === props.card.rarityRef
    ) {
      points += 1;
    }

    if (currentCard.typeRef === 'Unit' && props.card.typeRef === 'Unit') {
      points += (9 - Math.abs(currentCard.attack - props.card.attack)) / 3;
      points += (9 - Math.abs(currentCard.health - props.card.health)) / 3;
    }

    points += (12 - Math.abs(currentCard.cost - props.card.cost)) / 3;

    addToCardCodePoints(cardCodePoints, cardCode, points);
  }

  return cardCodePoints.reverse().map((x) => cardJsonObject[x.cardCode]);
});
</script>

<style scoped>
.card-similar-cards {
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr;
}

@media (min-width: 769px) {
  .card-similar-cards {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
