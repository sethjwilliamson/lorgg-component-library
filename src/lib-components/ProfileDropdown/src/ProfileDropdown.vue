<template>
  <div class="profile-dropdown-wrapper">
    <div ref="profile" class="profile-dropdown">
      {{ props.name }}
    </div>

    <div ref="dropdown" class="slider-wrapper">Test</div>
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
.profile-dropdown-wrapper {
  display: flex;
  align-items: center;
}

.profile-dropdown {
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: bold;
  color: var(--color-gold);
  font-size: 18px;
}
</style>
