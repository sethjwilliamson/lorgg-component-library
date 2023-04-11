<template>
  <SmallTable class="small-table" :heading-items="headingItems">
    <RevealCarousel class="reveal-carousel" :card-codes="props.cardCodes" />
  </SmallTable>
</template>

<script setup lang="ts">
import SmallTable from '@/lib-components/SmallTable';
import { HeadingItem } from '@/lib-components/SmallTable/src/types';
import { dashboardNewCardsProps, DashboardNewCardsProps } from './types';
import { useI18n } from 'vue-i18n';
import RevealCarousel from '@/lib-components/RevealCarousel';
const { t } = useI18n();

const props: DashboardNewCardsProps = defineProps(dashboardNewCardsProps);

const headingItems = [
  {
    title: t('general.newCards'),
    id: 'newCards',
  },
] as HeadingItem[];
</script>

<style scoped>
.small-table {
  --table-gap: 1px;
  --table-grid-auto-rows: 1fr;
  --table-grid-template-columns: repeat(3, 1fr);
  --table-grid-template-rows: 50px;
}

.reveal-carousel {
  grid-column: 1 / -1;
  padding: 10px;
  padding-top: 0;
}
</style>
