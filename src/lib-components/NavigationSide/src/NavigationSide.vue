<template>
  <div
    ref="navigationSide"
    class="navigation-side"
    :class="props.expanded ? 'expanded' : ''"
  >
    <div class="content logo no-scrollbar">
      <div class="nav-item">
        <div class="nav-icon-wrapper">
          <LogoIcon logo-type="logo-only" />
        </div>
        <div class="nav-text">
          <LogoIcon logo-type="text-only" />
        </div>
      </div>
    </div>
    <div ref="navigationPages" class="pages content no-scrollbar">
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
import { useI18n } from 'vue-i18n';
import CircleCardItem from '@/lib-components/CircleCardItem';
import LogoIcon from '@/lib-components/icons/LogoIcon';
import { NavigationSideProps, navigationSideProps } from './types';
import { onMounted, onUnmounted, ref } from 'vue';
const { t } = useI18n();

const props: NavigationSideProps = defineProps(navigationSideProps);
const navigationSide = ref<HTMLElement>();
const navigationPages = ref<HTMLElement>();
let resizeObserver: ResizeObserver;

onMounted(() => {
  resizeObserver = new ResizeObserver(updateScroll);

  if (navigationSide.value) {
    resizeObserver.observe(navigationSide.value);
  }

  navigationPages.value?.addEventListener('scroll', updateScroll);
  updateScroll();
});
onUnmounted(() => {
  resizeObserver.disconnect();
  navigationPages.value?.removeEventListener('scroll', updateScroll);
});

function updateScroll() {
  let scrollableUp = false;
  let scrollableDown = false;

  if (!navigationPages.value) {
    return;
  }

  if (navigationPages.value.clientHeight < navigationPages.value.scrollHeight) {
    scrollableUp = navigationPages.value.scrollTop > 0;
    scrollableDown =
      navigationPages.value.scrollTop <
      navigationPages.value.scrollHeight - navigationPages.value.clientHeight;
  }

  navigationPages.value?.classList.toggle('scrollable-up', scrollableUp);
  navigationPages.value?.classList.toggle('scrollable-down', scrollableDown);
}
</script>

<style scoped>
.navigation-side {
  --width-collapsed: 50px;
  --width-expanded: 250px;
  background-color: var(--color-background-1);
  display: flex;
  flex-direction: column;
  height: inherit;
  max-width: 80vw;
  position: relative;
  transition: width 0.3s;
  width: var(--width-collapsed);
  z-index: 2;
}

.navigation-side.expanded,
.navigation-side:hover {
  width: var(--width-expanded);
}

.navigation-side.expanded {
  animation: 0.3s slideIn;
}

.content {
  display: grid;
  overflow-x: hidden;
  grid-template-columns: var(--width-collapsed) calc(
      var(--width-expanded) - var(--width-collapsed)
    );
  grid-auto-rows: var(--width-collapsed);
}

.content.logo {
  flex-shrink: 0;
  border-bottom: solid 1px var(--color-1);
}

.pages {
  overflow-y: auto;
}

.content.pages.scrollable-down {
  box-shadow: inset 0 -20px 20px -20px var(--color-0);
}
.content.pages.scrollable-up {
  box-shadow: inset 0px 20px 20px -20px var(--color-0);
}
.content.pages.scrollable-down.scrollable-up {
  box-shadow: inset 0 -20px 20px -20px var(--color-0),
    inset 0px 20px 20px -20px var(--color-0);
}

.profile {
  --circle-card-item-size: 35px;
  border-top: solid 1px var(--color-1);
  flex-shrink: 0;
  margin-top: auto;
}

.nav-item {
  color: var(--color-0);
  display: contents;
}

.content.logo .nav-item {
  color: var(--color-primary-2);
  position: sticky;
  top: 0;
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
  z-index: -1;
}

.nav-item:hover > .nav-icon-wrapper,
.nav-item.highlight > .nav-icon-wrapper {
  background-color: var(--color-background-2);
}

.content.logo > .nav-item > .nav-icon-wrapper {
  padding: 8px;
}

.nav-text {
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  z-index: -1;
}

.content.logo .nav-item > .nav-text {
  justify-content: center;
  padding-left: 10px;
  width: 150px;
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
