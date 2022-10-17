<template>
  <a :href="link">
    <button ref="button" class="circle-button">
      <font-awesome-icon icon="pencil-alt" class="icon" />
    </button>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, ComputedRef } from 'vue';
import tippy from 'tippy.js';
import { EditDeckNameButtonProps, editDeckNameButtonProps } from './types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: EditDeckNameButtonProps = defineProps(editDeckNameButtonProps);
const button = ref<HTMLElement | null>(null);

const link: ComputedRef<string> = computed(() => {
  return `/deck-builder/${props.deckCode}`;
});

onMounted(() => {
  tippy(button.value as HTMLElement, {
    content: t('deck.openInDeckBuilder'),
    arrow: true,
  });
});
</script>
