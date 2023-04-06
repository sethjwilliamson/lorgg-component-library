<template>
  <div class="profile-champion-row wrapper" :style="{ '--index': props.index }">
    <div
      class="small-table-background"
      :style="{ '--background-image': `url(${backgroundCard})` }"
    ></div>
    <div class="wrapper">
      <div class="champion-column column-content">
        <RegionItem :region-ref="props.regionNameRef" />
        <span>{{ region?.name }}</span>
      </div>
      <div class="matches-column column-content">
        {{ localeNumber(props.matches, 0, 10) }}
      </div>
      <div
        class="winrate-column column-content"
        :style="{ color: `var(${winrateColor(props.wins / props.matches)})` }"
      >
        {{ localeNumber((props.wins / props.matches) * 100, 1, 3) }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { localeNumber, winrateColor } from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
import RegionItem from '@/lib-components/RegionItem';
import { computed } from 'vue';
import { ProfileRegionRowProps, profileRegionRowProps } from './types';

const props: ProfileRegionRowProps = defineProps(profileRegionRowProps);

const region = computed(() => {
  return useJsonStore().jsons.dataJson.regions.find(
    (x) => x.nameRef === props.regionNameRef,
  );
});

const backgroundCard = computed(() => {
  return `https://lor.gg/storage/cards/banner/${region.value?.cardCode}.png`;
});
</script>

<style scoped>
.champion-column {
  --region-item-size: 35px;
  display: flex;
  gap: 10px;
  justify-content: start;
  padding-left: 20px;
}

.circle-card-item {
  min-width: 35px;
}
</style>
