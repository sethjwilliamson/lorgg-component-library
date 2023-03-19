<template>
  <SidePanelSectionPane class="archetype-side-panel-highlight">
    <DeckHighlightRegions
      class="deck-highlight-regions"
      :regions="props.regions"
    />
    <DeckHighlightCards
      class="deck-highlight-cards"
      :class="props.cardCodes.length === 1 ? 'single' : ''"
      :card-codes="props.cardCodes"
    />
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import {
  ArchetypeSidePanelHighlightProps,
  archetypeSidePanelHighlightProps,
} from './types';
import DeckHighlightCards from '@/lib-components/DeckHighlightCards';
import DeckHighlightRegions from '@/lib-components/DeckHighlightRegions';

const props: ArchetypeSidePanelHighlightProps = defineProps(
  archetypeSidePanelHighlightProps,
);
</script>

<style scoped>
.archetype-side-panel-highlight {
  display: flex;
  justify-content: space-between;
}

.deck-highlight-regions {
  width: 85px;
}

.deck-highlight-cards {
  width: 85px;
}

.deck-highlight-cards.single {
  flex-direction: row-reverse;
}
</style>
