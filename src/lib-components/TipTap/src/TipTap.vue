<template>
  <editor-content :editor="editor" />
</template>

<script setup lang="ts">
import { EditorContent, Editor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { watch } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const editor = new Editor({
  content: props.modelValue,
  extensions: [StarterKit],
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
</script>

<style scoped></style>
