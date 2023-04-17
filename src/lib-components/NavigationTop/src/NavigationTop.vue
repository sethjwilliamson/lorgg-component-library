<template>
  <div class="navigation-top">
    <NavigationTopDesktop class="navigation-top-desktop" v-bind="props" />
    <NavigationTopMobile class="navigation-top-mobile" v-bind="props" />
  </div>
</template>

<script setup lang="ts">
import { NavigationProps, navigationProps } from '@/types';
import NavigationTopDesktop from '@/lib-components/NavigationTopDesktop';
import NavigationTopMobile from '@/lib-components/NavigationTopMobile';

const props: NavigationProps = defineProps(navigationProps);
</script>

<style scoped>
.navigation-top {
  display: grid;
}

.navigation-top > .navigation-top-desktop {
  display: none;
}

@media (min-width: 769px) {
  .navigation-top > .navigation-top-desktop {
    display: flex;
  }

  .navigation-top > .navigation-top-mobile {
    display: none;
  }
}
</style>
