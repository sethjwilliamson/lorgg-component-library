<template>
  <div class="profile-dropdown-wrapper">
    <div class="profile-dropdown" ref="profile">
      {{ props.name }}
    </div>

    <div ref="dropdown" class="slider-wrapper">
      Test
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ProfileDropdownProps, profileDropdownProps } from './types';
import tippy from 'tippy.js';

const props: ProfileDropdownProps = defineProps(profileDropdownProps);

const profile = ref<HTMLElement>();
const dropdown = ref<HTMLElement>();

onMounted(() => {
  tippy(profile.value as HTMLElement, {
    content: dropdown.value as HTMLElement,
    arrow: true,
    interactive: true,
    interactiveBorder: 10,
  });
});
</script>

<style scoped>

</style>
