<template>
  <div class="tippy-text" v-html="props.text"></div>
</template>

<script setup lang="ts">
import { tippyTextProps, TippyTextProps } from './types';

const props: TippyTextProps = defineProps(tippyTextProps);
</script>

<style scoped>
.tippy-text {
  max-width: 300px;
  text-align: center;
  border-radius: 10px;
  white-space: pre-wrap;
}
</style>
