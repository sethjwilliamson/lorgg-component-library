<template>
  <button class="circle-button" ref="button" @click="deleteDeck">
    <font-awesome-icon icon="trash-alt" class="icon" />
  </button>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import { onMounted, ref } from 'vue';
import { deleteDeckButtonProps, DeleteDeckButtonProps } from './types';

const props: DeleteDeckButtonProps = defineProps(deleteDeckButtonProps);
const button = ref<HTMLElement | null>(null);

// const emit = defineEmits<{
//   (e: 'deleted'): void;
// }>();

onMounted(() => {
  tippy(button.value as HTMLElement, {
    // TODO: Translate
    content: 'Delete Deck',
    arrow: true,
  });
});

function deleteDeck() {
  // TODO: Translate
  const confirmation = confirm(
    'Are you sure you would like to delete this deck?',
  );

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
