<template>
  <editor-content :editor="editor" />
</template>

<script setup lang="ts">
import { EditorContent, Editor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { watch } from 'vue';
import ResizableImage from '@/lib-components/TipTap Nodes/ResizableImage/src/ResizableImage';
import CardItem from '@/lib-components/TipTap Nodes/CardItem/src/CardItem';

const props = defineProps<{
  modelValue: string;
  editable: boolean;
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
    CardItem,
  ],
  editable: props.editable,
  onUpdate: () => {
    emit('update:modelValue', editor.getHTML());
  },
});

watch(
  () => props.modelValue,
  (newValue) => {
    // HTML
    const isSame = editor.getHTML() === newValue;

    if (isSame) {
      return;
    }

    editor.commands.setContent(newValue, false);
  },
);
</script>

<style scoped></style>
