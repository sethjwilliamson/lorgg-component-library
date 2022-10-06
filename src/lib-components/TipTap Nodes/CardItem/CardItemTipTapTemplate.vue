<template>
  <node-view-wrapper as="span">
    <CardItem :card-code-prop="props.node.attrs.cardCode" is-root />
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3';
import CardItem from '@/lib-components/CardItem/src/CardItem.vue';

const props = defineProps(nodeViewProps);
</script>
