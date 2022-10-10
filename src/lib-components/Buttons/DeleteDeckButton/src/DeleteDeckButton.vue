<template>
  <button class="circle-button" ref="button" @click="deleteDeck">
    <font-awesome-icon icon="trash" class="icon" />
  </button>
</template>

<script setup lang="ts">
import tippy from 'tippy.js';
import { onMounted, ref } from 'vue';
import { copyDeckButtonProps, CopyDeckButtonProps } from './types';

const props: CopyDeckButtonProps = defineProps(copyDeckButtonProps);
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
