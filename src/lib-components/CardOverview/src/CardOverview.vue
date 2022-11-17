<template>
  <div class="card-overview">
    <div class="overview-top">
      <div class="card-name">
        {{ card.name }}
      </div>

      <font-awesome-icon icon="times" class="close-icon" />
    </div>
    <div class="card-tags-container">
      <div class="card-tags">
        <div class="card-tag">
          <div
            class="icon"
            :style="{ content: `url(${region?.icon ?? ''})` }"
          ></div>
          <div class="card-tag-text">
            {{ region.name }}
          </div>
        </div>
        <div class="card-tag">
          <div
            class="icon"
            :style="{ content: `url(${rarity?.icon ?? ''})` }"
          ></div>

          <div class="card-tag-text">
            {{ rarity.name }}
          </div>
        </div>
        <div class="card-tag">
          <div
            class="icon"
            :style="{ content: `url(${type?.icon ?? ''})` }"
          ></div>

          <div class="card-tag-text">
            {{ type.name }}
          </div>
        </div>
        <div class="card-tag">
          <div
            class="icon"
            :style="{ content: `url(${set?.icon ?? ''})` }"
          ></div>

          <div class="card-tag-text">
            {{ set.name }}
          </div>
        </div>
      </div>
    </div>

    <hr class="divider" />
    <div class="card-text">
      {{ card.descriptionRaw }}
    </div>
    <hr class="divider" />
    <template v-for="keyword in keywordObjects" :key="keyword.nameRef">
      <div class="keyword-description">
        <b class="keyword-name">
          {{ keyword.name + ' - ' }}
        </b>
        <span> {{ keyword.description }} </span>
      </div>
      <hr class="divider" />
    </template>
    <div class="flavor-text">
      {{ card.flavorText }}
    </div>
    <div class="card-art-section">
      <div class="card-art-button primary-button">Card Art</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DataJsonKeyword,
  DataJsonRarity,
  DataJsonRegion,
  DataJsonRuneterraChampion,
  DataJsonSet,
  DataJsonType,
} from '#/jsons';
import { isRegionRuneterran, propsToCard } from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
import { ComputedRef, computed } from 'vue';
import { cardStatsTableProps, CardStatsTableProps } from './types';

const props: CardStatsTableProps = defineProps(cardStatsTableProps);

const card = propsToCard(props.cardProp, props.cardCodeProp);
const dataJson = useJsonStore().jsons.dataJson;

const keywordObjects: ComputedRef<DataJsonKeyword[]> = computed(() => {
  const returnValue: DataJsonKeyword[] = [];

  for (const keywordRef of card.value.keywordRefs) {
    const keywordObject = dataJson.keywords.find(
      (x) => x.nameRef === keywordRef,
    );

    if (keywordObject) {
      returnValue.push(keywordObject);
    }
  }

  return returnValue;
});

const region: ComputedRef<DataJsonRegion | DataJsonRuneterraChampion> =
  computed(() => {
    if (isRegionRuneterran(card.value.regionRefs[0])) {
      return (
        dataJson.runeterraChampions.find(
          (x) => x.nameRef === card.value.regionRefs[0],
        ) ?? dataJson.regions[0]
      );
    }

    return (
      dataJson.regions.find((x) => x.nameRef === card.value.regionRefs[0]) ??
      dataJson.regions[0]
    );
  });

const rarity: ComputedRef<DataJsonRarity> = computed(() => {
  return (
    dataJson.rarities.find((x) => x.nameRef === card.value.rarityRef) ??
    dataJson.rarities[0]
  );
});

const type: ComputedRef<DataJsonType> = computed(() => {
  return (
    dataJson.types.find((x) => x.nameRef === card.value.typeRef) ??
    dataJson.types[0]
  );
});

const set: ComputedRef<DataJsonSet> = computed(() => {
  return (
    dataJson.sets.find((x) => x.nameRef === card.value.set) ?? dataJson.sets[0]
  );
});
</script>

<style scoped>
.card-overview {
  background-color: var(--color-background-1);
  border-radius: 20px;
  color: var(--color-0);
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
}

.overview-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-icon {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.icon {
  margin: 10px;
  width: 25px;
  height: 25px;
}

.card-name {
  color: var(--color-primary-2);
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 15px;
}
.card-tags-container {
  position: relative;
  height: 45px;
  margin-bottom: 15px;
}

.card-tags {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 45px;
  grid-gap: 10px;
}

.card-tag {
  display: flex;
  border-radius: 25px;
  background-color: var(--color-2);
  height: 45px;
  align-items: center;
}

.card-tag-text {
  font-size: 14px;
  opacity: 0.5;
  color: var(--color-primary-2);
  margin-right: 15px;
}

.card-tag:last-child {
  margin-right: 0;
}

.card-text {
  color: var(--color-primary-2);
  font-size: 20px;
  margin-bottom: 15px;
}

.keyword-name {
  color: var(--color-primary-2);
}

.keyword-description {
  font-size: 20px;
  margin-bottom: 15px;
}

.flavor-text {
  font-size: 20px;
}

.divider {
  /* TODO: Update Color? */
  border: #2c2d4a solid 1px;
  margin: 0px 10px 15px 10px;
}

.card-art-section {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
}
</style>
