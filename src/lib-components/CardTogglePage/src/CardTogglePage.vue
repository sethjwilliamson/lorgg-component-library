<template>
  <div class="card-page-toggle">
    <ToggleSwitch
      v-model:selected-option="selectedPage"
      :options="[
        t('cards.recommendedDecks'),
        t('cards.similarCards'),
        t('general.statistics'),
      ]"
    ></ToggleSwitch>
  </div>
</template>

<script setup lang="ts">
// TODO: Finish. Implement sub-pages.
import ToggleSwitch from '@/lib-components/ToggleSwitch';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
// import { cardTogglePageProps, CardTogglePageProps } from './types';
const { t } = useI18n();

// const props: CardTogglePageProps = defineProps(cardTogglePageProps);

const selectedPage = ref(0);

// TODO: Update page based on route. Use Prop ?
</script>

<style scoped>
.card-page-toggle {
  height: 45px;
  margin-bottom: 25px;
}
</style>
