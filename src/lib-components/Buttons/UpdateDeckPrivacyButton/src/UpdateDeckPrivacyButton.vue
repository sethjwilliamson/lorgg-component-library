<template>
  <button ref="button" class="circle-button" @click="updateDeckPrivacy">
    <font-awesome-icon
      :icon="props.deckIsPrivate ? 'lock' : 'unlock'"
      class="icon"
    />
  </button>
</template>

<script setup lang="ts">
import tippy, { Instance } from 'tippy.js';
import { onMounted, ref } from 'vue';
import {
  updateDeckPrivacyButtonProps,
  UpdateDeckPrivacyButtonProps,
} from './types';
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';
const { t } = useI18n();

const props: UpdateDeckPrivacyButtonProps = defineProps(
  updateDeckPrivacyButtonProps,
);
const button = ref<HTMLElement | null>(null);
let deckPrivacyTippy: Instance;

const emit = defineEmits<{
  (e: 'update:deckIsPrivate', value: boolean): void;
}>();

onMounted(() => {
  deckPrivacyTippy = tippy(button.value as HTMLElement, {
    content: `${t('deck.updatePrivacy')}: 
    ${props.deckIsPrivate ? t('deck.deckPrivate') : t('deck.deckPublic')}`,
    arrow: true,
  });
});

watch(
  () => props.deckIsPrivate,
  (newVal: boolean) => {
    deckPrivacyTippy.setContent(
      `${t('deck.updatePrivacy')}: 
    ${newVal ? t('deck.deckPrivate') : t('deck.deckPublic')}`,
    );
  },
);

function updateDeckPrivacy() {
  emit('update:deckIsPrivate', !props.deckIsPrivate);

  // axios
  //   .put('/api/deck_builder/' + props.deckId, {
  //     is_private: !props.deckIsPrivate,
  //   })
  //   .then((response) => {
  //     emit('update:deckIsPrivate', !props.deckIsPrivate);
  //   });
}
</script>
