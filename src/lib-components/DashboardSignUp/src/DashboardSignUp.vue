<template>
  <div class="dashboard-sign-up">
    <div class="top">
      <LogoIcon logo-type="text-only" class="logo-icon" />
      <div class="subtitle">
        {{ t('general.becomeTheMaster') }}
      </div>
    </div>
    <div class="fancy-button">
      {{ t('general.signIn') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from '@/lib-components/icons/LogoIcon';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.dashboard-sign-up {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: space-between;
  position: relative;
  background-color: var(--color-background-2);
  border-radius: 20px;
  overflow: hidden;
}

.dashboard-sign-up::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('https://lor.gg/storage/cards/full-art/03MT084.webp');
  background-size: 180%;
  background-position: center;
  mask: radial-gradient(circle, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 90%);
  -webkit-mask: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 90%
  );
}

.top {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
}

.logo-icon {
  color: var(--color-primary-2);
  width: 60%;
}

.subtitle {
  text-transform: uppercase;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 24px;
  color: var(--color-primary-2);
}

.fancy-button {
  color: var(--color-primary-2);
  z-index: 1;
  align-self: stretch;
}
</style>
