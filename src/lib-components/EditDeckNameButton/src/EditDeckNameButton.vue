<template>
  <button class="circle-button" ref="button" @click="copyDeckCode">
    <font-awesome-icon icon="pencil-alt" class="icon" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';
import { EditDeckNameButtonProps, editDeckNameButtonProps } from './types';

const props: EditDeckNameButtonProps = defineProps(editDeckNameButtonProps);
const button = ref<HTMLElement | null>(null);

onMounted(() => {
  tippy(button.value as HTMLElement, {
    // TODO: Translate
    content: 'Edit Name',
    arrow: true,
  });
});

function copyDeckCode() {
  // TODO: Translate
  const newName = prompt('Rename Deck', props.deckName);

  if (!newName) {
    return;
  }

  // axios.put("/api/deck_builder/" + props.deckId, {
  //   "name": newName
  // })
  // .then (( response) => {
  //   this.$emit("change", newName)
  // })
}
</script>
