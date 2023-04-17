<template>
  <div class="navigation-top-desktop">
    <div class="left content">
      <SearchBar class="search-bar" />
    </div>
    <div class="right content">
      <SocialLinks class="social-links" />
      <LanguageSelection class="language-selection" />
      <ProfileDropdown v-if="props.isLoggedIn" :name="props.name" />
      <div v-else class="fancy-button">Sign In</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/lib-components/SearchBar';
import SocialLinks from '@/lib-components/SocialLinks';
import LanguageSelection from '@/lib-components/LanguageSelection';
import ProfileDropdown from '@/lib-components/ProfileDropdown';
import { NavigationProps, navigationProps } from '@/types';

const props: NavigationProps = defineProps(navigationProps);
</script>

<style scoped>
.navigation-top-desktop {
  align-items: center;
  background-color: var(--color-background-1);
  color: var(--color-primary-2);
  display: flex;
  gap: 40px;
  justify-content: space-between;
  padding: 0px 10px;
}

.content {
  display: flex;
  gap: inherit;
}

.search-bar {
  width: 300px;
}

.fancy-button {
  color: var(--color-primary-2);
  height: 40px;
}
</style>
