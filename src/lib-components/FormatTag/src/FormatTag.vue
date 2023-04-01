<template>
  <div class="format-tag-container">
    <div
      ref="formatTag"
      class="format-tag"
      :style="{ '--color': formatTagValue?.color }"
    >
      {{ formatTagValue?.abbreviation }}
    </div>
    <div ref="formatTagTippy">
      <TippyText :text="formatTagValue?.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import { computed, onMounted, ref } from 'vue';
import { formatTagProps, FormatTagProps } from './types';
import { useJsonStore } from '@/helpers/stores';
import TippyText from '@/lib-components/TippyText';

const props: FormatTagProps = defineProps(formatTagProps);
const formatTag = ref<HTMLElement | null>(null);
const formatTagTippy = ref<HTMLElement | null>(null);

const formatTagValue = computed(() => {
  return useJsonStore().jsons.dataJson.formats.find(
    (x) => x.nameRef === props.format,
  );
});

onMounted(() => {
  tippy(formatTag.value as HTMLElement, {
    content: formatTagTippy.value as HTMLElement,
    arrow: true,
  });
});
</script>

<style scoped>
.format-tag {
  background-color: var(--color);
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  color: var(--color-primary-2);
}
</style>
