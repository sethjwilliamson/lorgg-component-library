<template>
  <div class="navigation-top">
    <div class="left content">
      <LogoIcon class="logo-icon" logo-type="logo-and-text" />
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
import LogoIcon from '@/lib-components/icons/LogoIcon';
import { NavigationTopProps, navigationTopProps } from './types';
import SearchBar from '@/lib-components/SearchBar';
import SocialLinks from '@/lib-components/SocialLinks';
import LanguageSelection from '@/lib-components/LanguageSelection';
import ProfileDropdown from '@/lib-components/ProfileDropdown';

const props: NavigationTopProps = defineProps(navigationTopProps);
</script>

<style scoped>
.navigation-top {
  align-items: center;
  padding: 10px 20px;
  display: flex;
  background-color: var(--color-background-1);
  gap: 40px;
  justify-content: space-between;
}

.content {
  display: flex;
  gap: inherit;
}

.logo-icon {
  color: var(--color-primary-2);
  width: 200px;
}

.search-bar {
  width: 360px;
}

.fancy-button {
  color: var(--color-primary-2);
}
</style>
