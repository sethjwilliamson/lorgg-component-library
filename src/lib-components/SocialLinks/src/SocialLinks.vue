<template>
  <div class="social-links">
    <FontAwesomeIcon class="icon" icon="fa-brands fa-discord" />
    <FontAwesomeIcon class="icon" icon="fa-brands fa-twitter" />
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<style scoped>
.social-links {
  align-items: center;
  display: flex;
  gap: 10px;
}

.icon {
  height: var(--social-links-size, 20px);
  color: var(--color-0);
}
</style>
