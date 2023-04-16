<template>
  <div class="navigation-side">
    <div class="pages content no-scrollbar">
      <div class="nav-item logo">
        <div class="nav-icon-wrapper">
          <LogoIcon logo-type="logo-only" />
        </div>
        <div class="nav-text">
          <LogoIcon logo-type="text-only" />
        </div>
      </div>
      <a
        v-for="item in props.items"
        :key="item.routerLocation"
        :href="item.routerLocation"
        class="nav-item"
        :class="item.highlighted ? 'highlight' : ''"
      >
        <div class="nav-icon-wrapper">
          <FontAwesomeIcon class="nav-icon" :icon="item.faIcon" />
        </div>
        <div class="nav-text">
          {{ item.text }}
        </div>
      </a>
    </div>
    <div class="profile content">
      <template v-if="props.isLoggedIn">
        <div class="nav-item">
          <div class="nav-icon-wrapper">
            <FontAwesomeIcon class="nav-icon" icon="gift" />
          </div>
          <div class="nav-text">Open Cards</div>
        </div>
        <div class="nav-item">
          <div class="nav-icon-wrapper">
            <FontAwesomeIcon class="nav-icon" icon="cog" />
          </div>
          <div class="nav-text settings">
            <div>{{ t('general.settings') }}</div>
            <FontAwesomeIcon class="icon" icon="language" />
          </div>
        </div>

        <div class="nav-item">
          <div class="nav-icon-wrapper">
            <FontAwesomeIcon class="nav-icon" icon="rotate-right" />
          </div>
          <div class="nav-text">
            {{ t('general.syncUserData') }}
          </div>
        </div>

        <div class="nav-item">
          <div class="nav-icon-wrapper">
            <CircleCardItem
              :card-code-prop="props.iconCard ?? '05BC160'"
              :ignore-card-item="true"
              :color-override="props.bannerColor"
            />
          </div>
          <div class="nav-text name">
            {{ props.name }}
          </div>
        </div>
      </template>
      <template v-else>
        <div class="nav-item">
          <div class="nav-icon-wrapper">
            <FontAwesomeIcon class="nav-icon" icon="cog" />
          </div>
          <div class="nav-text settings">
            <div>{{ t('general.settings') }}</div>
            <FontAwesomeIcon class="icon" icon="language" />
          </div>
        </div>
        <a href="/test" class="nav-item">
          <div class="nav-icon-wrapper">
            <FontAwesomeIcon class="nav-icon" icon="arrow-right-to-bracket" />
          </div>
          <div class="nav-text sign-in-container">
            <div class="fancy-button">
              {{ t('general.signIn') }}
            </div>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { NavigationSideProps, navigationSideProps } from './types';
import { useI18n } from 'vue-i18n';
import CircleCardItem from '@/lib-components/CircleCardItem';
import LogoIcon from '@/lib-components/icons/LogoIcon';
const { t } = useI18n();

const props: NavigationSideProps = defineProps(navigationSideProps);
</script>

<style scoped>
.navigation-side {
  --width-collapsed: 50px;
  --width-expanded: 200px;
  background-color: var(--color-background-1);
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-between;
  transition: width 0.3s;
  width: var(--width-collapsed);
}

.navigation-side:hover {
  width: var(--width-expanded);
}

.content {
  display: grid;
  overflow-x: hidden;
  grid-template-columns: var(--width-collapsed) calc(
      var(--width-expanded) - var(--width-collapsed)
    );
  grid-auto-rows: var(--width-collapsed);
}

.pages {
  overflow-y: auto;
}

.profile {
  --circle-card-item-size: 35px;
  border-top: solid 1px var(--color-1);
  flex-shrink: 0;
}

.nav-item {
  color: var(--color-0);
  display: contents;
}

.nav-item.logo {
  color: var(--color-primary-2);
}

.highlight.nav-item {
  color: var(--color-gold);
}

.nav-item:hover {
  color: var(--color-primary-2);
}

.nav-icon-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
}

.nav-item:hover > .nav-icon-wrapper,
.nav-item.highlight > .nav-icon-wrapper {
  background-color: var(--color-background-2);
}

.nav-item.logo > .nav-icon-wrapper {
  padding: 8px;
}

.nav-text {
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: bold;
}

.nav-item.logo > .nav-text {
  justify-content: center;
  padding: 10px;
}

.nav-text.settings {
  justify-content: space-between;
  padding-right: 15px;
}

.settings .icon {
  font-size: 24px;
}

.profile .name {
  color: var(--color-gold);
}

.nav-item:hover > .nav-text,
.nav-item.highlight > .nav-text {
  background-color: var(--color-background-2);
}

.sign-in-container {
  padding: 0 10px;
}

.fancy-button {
  color: var(--color-primary-2);
  height: 40px;
  width: 100%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-transform: uppercase;
}
</style>
