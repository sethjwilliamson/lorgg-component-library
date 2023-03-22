<template>
  <div
    class="deck-builder-summary-type"
    :class="[
      props.typeSummary.isError ? 'error' : '',
      props.typeSummary.typeRef === 'Deck' ? 'deck' : '',
    ]"
  >
    <div class="number-container">
      {{ props.typeSummary.quantity }}
    </div>
    <div class="type-icon" v-if="props.typeSummary.typeRef !== 'Deck'">
      <ChampionIcon v-if="props.typeSummary.typeRef === 'Champion'" />
      <FollowerIcon v-else-if="props.typeSummary.typeRef === 'Follower'" />
      <SpellIcon v-else-if="props.typeSummary.typeRef === 'Spell'" />
      <LandmarkIcon v-else-if="props.typeSummary.typeRef === 'Landmark'" />
      <EquipmentIcon v-else-if="props.typeSummary.typeRef === 'Equipment'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChampionIcon from '@/lib-components/icons/ChampionIcon';
import DeckIcon from '@/lib-components/icons/DeckIcon';
import EquipmentIcon from '@/lib-components/icons/EquipmentIcon';
import FollowerIcon from '@/lib-components/icons/FollowerIcon';
import LandmarkIcon from '@/lib-components/icons/LandmarkIcon';
import SpellIcon from '@/lib-components/icons/SpellIcon';
import {
  DeckBuilderSummaryTypeProps,
  deckBuilderSummaryTypeProps,
} from './types';

const props: DeckBuilderSummaryTypeProps = defineProps(
  deckBuilderSummaryTypeProps,
);
</script>

<style scoped>
.deck-builder-summary-type {
  align-items: center;
  background-color: var(--color-background-1);
  border-radius: 999px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 30px;
}

.deck-builder-summary-type.deck {
  flex-grow: 1;
  font-size: 20px;
  width: unset;
}

.number-container {
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 999px;
  color: var(--color-primary-2);
  display: flex;
  font-weight: bold;
  justify-content: center;
  width: 100%;
}

.deck-builder-summary-type.error > .number-container {
  color: var(--color-bad);
}

.deck-builder-summary-type.deck > .number-container {
  aspect-ratio: unset;
  flex-grow: 1;
  height: 100%;
}

.type-icon {
  color: var(--color-0);
  width: 20px;
}
</style>
