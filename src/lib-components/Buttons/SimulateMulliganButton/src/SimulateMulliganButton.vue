<template>
  <div>
    <button ref="button" class="circle-button" @click="showModal = true">
      <FontAwesomeIcon icon="hand-paper"></FontAwesomeIcon>
    </button>

    <ModalItem v-model:show-modal="showModal">
      <div class="simulate-mulligan-wrapper">
        <SimulateMulligan :deck="props.deck"></SimulateMulligan>
      </div>
    </ModalItem>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';
import {
  simulateMulliganButtonProps,
  SimulateMulliganButtonProps,
} from './types';
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ModalItem from '@/lib-components/ModalItem';
import SimulateMulligan from '@/lib-components/Deck/SimulateMulligan';
const { t } = useI18n();

const props: SimulateMulliganButtonProps = defineProps(
  simulateMulliganButtonProps,
);
const button = ref<HTMLElement | null>(null);

const showModal = ref(false);

onMounted(() => {
  tippy(button.value as HTMLElement, {
    content: t('deck.simulateMulligan'),
    arrow: true,
  });
});
</script>

<style scoped>
.circle-button {
  font-size: 28px;
  font-size: 900;
}

.simulate-mulligan-wrapper {
  max-width: 90vw;
  padding: 20px;
  border-radius: var(--box-border-radius);
  background-color: var(--color-background-1);
}
</style>
