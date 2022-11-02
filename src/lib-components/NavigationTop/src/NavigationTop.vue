<template>
  <div class="navigation-top">
    <div class="mobile"></div>
    <div class="desktop">
      <div class="left content">
        <img src="lorgg-logo-w-text-horiz" alt="LOR.GG Logo" />
        <!-- TODO: Search Bar -->
        <div class="search-bar">Search Bar</div>
      </div>
      <div class="right content">
        <div class="premium-button">Premium Button</div>
        <SocialMediaLinks></SocialMediaLinks>
        <div class="language-selection">Language Selction</div>
        <div class="sign-in" v-if="true">Sign In</div>
        <div class="user-profile" v-else>User Profile</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialMediaLinks from '@/lib-components/SocialMediaLinks';
console.log('TEST');
</script>

<style scoped>
.desktop {
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
}

.content > *:not(:last-child)::after {
  content: '';
  margin: 0 20px;
  height: 20px;
  border: 1px solid black;
}
</style>
