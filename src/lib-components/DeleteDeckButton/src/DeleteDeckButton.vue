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

<style scoped>
.checkbox-item {
  align-items: center;
  background-color: var(--color-2);
  border-radius: 25px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 10px;
  height: 45px;
  padding: 10px;
}

/* When last child is odd or when there is less than 3 total children, span 2 */
.checkbox-item:last-child:nth-child(odd),
.checkbox-item:nth-child(1):nth-last-child(3),
.checkbox-item:nth-child(2):nth-last-child(2),
.checkbox-item:nth-child(3):nth-last-child(1),
.checkbox-item:nth-child(2):nth-last-child(1),
.checkbox-item:nth-child(1):nth-last-child(2) {
  grid-column: span 2;
}

.checkbox-item[selected='true'] {
  background-color: var(--color-primary);
}

.checkbox-icon {
  height: 25px;
  width: 25px;
}

.checkbox-name {
  color: var(--color-text-disabled);
  flex-grow: 1;
  font-size: var(--font-size-s);
  text-align: left;
}

.checkbox-name:first-child {
  text-align: center;
}

.checkbox-item[selected='true'] > .checkbox-name {
  color: var(--color-primary-2);
}
</style>
