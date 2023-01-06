<template>
  <a :href="link">
    <button ref="button" class="circle-button">
      {{ t('archetype.abbreviation') }}
    </button>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, ComputedRef } from 'vue';
import tippy from 'tippy.js';
import {
  OpenArchetypePageButtonProps,
  openArchetypePageButtonProps,
} from './types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: OpenArchetypePageButtonProps = defineProps(
  openArchetypePageButtonProps,
);
const button = ref<HTMLElement | null>(null);

const link: ComputedRef<string> = computed(() => {
  return `/archetype/${props.archetypeId}`;
});

onMounted(() => {
  tippy(button.value as HTMLElement, {
    content: t('deck.openArchetypePage'),
    arrow: true,
  });
});
</script>

<style scoped>
.circle-button {
  font-size: 28px;
  font-size: 900;
}
</style>
