<template>
  <div class="region-item">
    <img
      ref="regionImg"
      :alt="region?.name"
      :src="`https://lor.gg/${region?.icon}`"
      class="region-img"
    />
    <div ref="regionTippy">
      <TippyText :text="region?.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJsonStore } from '@/helpers/stores';
import tippy from 'tippy.js';
import { onMounted, ref } from 'vue';
import { RegionItemProps, regionItemProps } from './types';
import TippyText from '@/lib-components/TippyText/src/TippyText.vue';

const props: RegionItemProps = defineProps(regionItemProps);
const regionImg = ref<HTMLElement | null>(null);
const regionTippy = ref<HTMLElement | null>(null);

const region =
  useJsonStore().jsons.dataJson.regions.find(
    (x) => x.nameRef == props.regionRef,
  ) ??
  useJsonStore().jsons.dataJson.runeterraChampions.find(
    (x) => x.nameRef === props.regionRef,
  );

onMounted(() => {
  tippy(regionImg.value as HTMLElement, {
    content: regionTippy.value as HTMLElement,
    arrow: true,
  });
});
</script>

<style scoped>
.region-img,
.region-item {
  width: inherit;
}
</style>
