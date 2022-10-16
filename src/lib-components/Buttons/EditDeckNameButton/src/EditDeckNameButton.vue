<template>
  <button ref="button" class="circle-button" @click="copyDeckCode">
    <font-awesome-icon icon="pencil-alt" class="icon" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';
import { EditDeckNameButtonProps, editDeckNameButtonProps } from './types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: EditDeckNameButtonProps = defineProps(editDeckNameButtonProps);
const button = ref<HTMLElement | null>(null);

onMounted(() => {
  tippy(button.value as HTMLElement, {
    content: t('deck.editDeckName'),
    arrow: true,
  });
});

function copyDeckCode() {
  const newName = prompt(t('deck.editDeckName'), props.deckName);

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
