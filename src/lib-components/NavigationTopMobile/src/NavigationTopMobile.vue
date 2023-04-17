<template>
  <div ref="navigationTopMobile" class="navigation-top-mobile">
    <template v-if="!isSearching">
      <FontAwesomeIcon class="icon" icon="bars" @click="onMenuClick" />
      <LogoIcon class="logo-icon" logo-type="text-only" />
      <FontAwesomeIcon
        class="icon"
        icon="search"
        @click.stop.prevent="onSearchClick"
      />
    </template>
    <SearchBar v-else ref="searchBar" class="search-bar" />

    <ModalItem v-model:show-modal="showModal">
      <NavigationSide class="navigation-side" v-bind="props" :expanded="true" />
    </ModalItem>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/lib-components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import LogoIcon from '@/lib-components/icons/LogoIcon';
import { ComponentPublicInstance, nextTick, onUnmounted, ref } from 'vue';
import NavigationSide from '@/lib-components/NavigationSide';
import ModalItem from '@/lib-components/ModalItem';
import { NavigationProps, navigationProps } from '@/types';

const props: NavigationProps = defineProps(navigationProps);

const isSearching = ref(false);
const showModal = ref(false);
const searchBar = ref<ComponentPublicInstance>();
const navigationTopMobile = ref<HTMLElement>();

window.addEventListener('click', onWindowClick);

function onWindowClick(ev: MouseEvent) {
  if (isSearching.value) {
    isSearching.value = !!navigationTopMobile.value?.contains(
      ev.target as HTMLElement,
    );
  }
}

function onSearchClick() {
  nextTick(() => {
    isSearching.value = true;

    nextTick(() => {
      searchBar.value?.$el.querySelector('input')?.focus();
    });
  });
}

function onMenuClick() {
  showModal.value = true;
}

onUnmounted(() => {
  window.removeEventListener('click', onWindowClick);
});
</script>

<style scoped>
.navigation-top-mobile {
  align-items: center;
  background-color: var(--color-background-1);
  color: var(--color-primary-2);
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
}

.logo-icon {
  width: 100px;
}

.icon {
  font-size: 20px;
}

.search-bar {
  width: 100%;
}

.navigation-side {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
</style>
