<template>
  <div class="deck-highlight-regions">
    <div
      v-for="regionRef in props.regions"
      :key="regionRef"
      class="region-item-wrapper"
    >
      <RegionItem class="region-item" :region-ref="regionRef"> </RegionItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegionItem from '@/lib-components/RegionItem';
import { DeckHighlightRegionsProps, deckHighlightRegionsProps } from './types';

const props: DeckHighlightRegionsProps = defineProps(deckHighlightRegionsProps);
</script>

<style scoped>
.deck-highlight-regions {
  --region-item-size: var(--region-item-size-override, 40px);
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: var(--region-item-size);
  justify-content: space-between;
  padding: 0 calc(var(--region-item-size) / 2);
}

.region-item-wrapper {
  position: relative;
}

.region-item {
  position: absolute;
  height: var(--region-item-size);
  width: var(--region-item-size);
  transform: translateX(-50%) translateY(-50%);
}
</style>
