<template>
  <button ref="button" class="circle-button" @click="deleteDeck">
    <font-awesome-icon icon="trash-alt" class="icon" />
  </button>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import { onMounted, ref } from 'vue';
import { deleteDeckButtonProps, DeleteDeckButtonProps } from './types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: DeleteDeckButtonProps = defineProps(deleteDeckButtonProps);
const button = ref<HTMLElement | null>(null);

// const emit = defineEmits<{
//   (e: 'deleted'): void;
// }>();

onMounted(() => {
  tippy(button.value as HTMLElement, {
    content: t('deck.deleteDeck'),
    arrow: true,
  });
});

function deleteDeck() {
  const confirmation = confirm(t('deck.deleteDeckConfirmation'));

  if (confirmation) {
    // TODO: Implement
    // axios.delete("/api/deck_builder/" + props.deckId)
    // .then( (response) => {
    //   emit("deleted")
    // })
    // .catch( (error) => {
    // })
  }
}
</script>
