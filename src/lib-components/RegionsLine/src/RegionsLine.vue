<template>
  <div class="regions-line">
    <div v-if="props.describeRegions" class="describe-regions">
      <div
        v-for="(count, region) in regionCount"
        :key="region"
        class="region-description"
      >
        <RegionItem :region-ref="(region as string)" class="icon" />
        <span>{{ `${count} ${t('general.cards')}` }}</span>
      </div>
    </div>
    <div class="lines">
      <div
        v-for="(count, region) in regionCount"
        :key="region"
        :style="regionLineStyle(count, region)"
        class="region-line"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ObjectWithNumber } from '#/helpers';
import {
  getCardsFromDeck,
  getDeckObjectFromCode,
  getRegionsFromDeck,
} from '@/helpers/functions';
import RegionItem from '@/lib-components/RegionItem';
import { computed, CSSProperties } from 'vue';
import { RegionsLineProps, regionsLineProps } from './types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: RegionsLineProps = defineProps(regionsLineProps);

const deck = computed(() => {
  if (props.deck) {
    return props.deck;
  }

  return getDeckObjectFromCode(props.deckCode);
});

const cards = computed(() => {
  if (props.cards) {
    return props.cards;
  }

  return getCardsFromDeck(deck.value);
});

const regionCount = computed(() => {
  const returnValue: ObjectWithNumber = {};

  for (const region of getRegionsFromDeck(deck.value)) {
    returnValue[region] = 0;
  }

  for (const card of cards.value) {
    for (const regionRef of card.regionRefs) {
      if (!(regionRef in returnValue)) {
        continue;
      }

      returnValue[regionRef] += deck.value[card.cardCode];
    }
  }

  return returnValue;
});

function regionLineStyle(
  count: number,
  region: string | number,
): CSSProperties {
  return {
    flexGrow: count,
    backgroundColor: `var(--color-${region}, var(--color-Runeterra))`,
  };
}
</script>

<style scoped>
.regions-line {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.describe-regions {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
}

.icon {
  --size: 25px;
  height: var(--size);
  width: var(--size);
}

.region-description {
  color: var(--color-0);
  display: flex;
  font-size: 11px;
  gap: 5px;
  text-transform: uppercase;
  align-items: flex-end;
}

.region-description:last-child {
  flex-direction: row-reverse;
}

.lines {
  display: flex;
  gap: 10px;
  width: 100%;
}

.region-line {
  border-radius: 5px;
  height: 10px;
}
</style>
