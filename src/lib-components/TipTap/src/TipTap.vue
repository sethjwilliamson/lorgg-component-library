<template>
  <editor-content :editor="editor" />
</template>

<script setup lang="ts">
import { EditorContent, Editor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { onMounted, watch } from 'vue';
import ResizableImage from '@/lib-components/TipTap Nodes/ResizableImage/src/ResizableImage';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const editor = new Editor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    ResizableImage.configure({
      inline: false,
    }),
  ],
  onUpdate: () => {
    emit('update:modelValue', editor.getHTML());
  },
});

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    // HTML
    const isSame = editor.getHTML() === newValue;

    if (isSame) {
      return;
    }

    editor.commands.setContent(newValue, false);
  },
);

onMounted(() => {
  editor.commands.setImage({
    src: 'https://lor.gg/storage/cards/card/en_us/06BW030.webp',
  });
  editor.commands.setImage({
    src: 'https://lor.gg/storage/cards/card/en_us/06BW030.webp',
  });
});
</script>

<style scoped></style>
