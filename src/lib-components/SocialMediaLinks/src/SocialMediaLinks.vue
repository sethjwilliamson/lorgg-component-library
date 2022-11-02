<template>
  <div class="social-links">
    <a href="https://discord.gg/tGTSXgDFVU">
      <font-awesome-icon :icon="['fab', 'discord']" class="social-icon" />
    </a>
    <a href="https://twitter.com/LORGG__">
      <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" />
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.social-links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.social-icon {
  color: var(--color-0);
  height: 25px;
  width: 25px;
}
</style>
