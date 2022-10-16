<template>
  <button ref="button" class="circle-button" @click="copyDeckCode">
    <font-awesome-icon icon="copy" class="icon" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { copyToClipboard } from '@/helpers/functions';
import tippy, { Instance } from 'tippy.js';
import { copyDeckButtonProps, CopyDeckButtonProps } from './types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: CopyDeckButtonProps = defineProps(copyDeckButtonProps);
const button = ref<HTMLElement | null>(null);
let deckCopiedTippy: Instance;
let copyButtonTippy: Instance;

onMounted(() => {
  copyButtonTippy = tippy(button.value as HTMLElement, {
    content: t('deck.copyDeckCode'),
    arrow: true,
  });

  deckCopiedTippy = tippy(button.value as HTMLElement, {
    content: t('deck.deckCodeCopied'),
    trigger: 'manual',
    arrow: true,
  });
});

function copyDeckCode() {
  copyToClipboard(props.deckCode);

  copyButtonTippy.hide();
  deckCopiedTippy.show();
}
</script>
