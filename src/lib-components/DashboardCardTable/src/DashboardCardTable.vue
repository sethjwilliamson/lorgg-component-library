<template>
  <SmallTable class="small-table" :heading-items="headingItems">
    <DashboardCardRow
      v-for="row in props.rows"
      :key="row.cardCode"
      :card-code="row.cardCode"
      :matches="row.matches"
      :wins="row.wins"
      :index="row.index + 2"
    />
  </SmallTable>
</template>

<script setup lang="ts">
import SmallTable from '@/lib-components/SmallTable';
import { HeadingItem } from '@/lib-components/SmallTable/src/types';
import { dashboardCardTableProps, DashboardCardTableProps } from './types';
import { useI18n } from 'vue-i18n';
import DashboardCardRow from '@/lib-components/DashboardCardRow';
const { t } = useI18n();

const props: DashboardCardTableProps = defineProps(dashboardCardTableProps);

const headingItems = [
  {
    title: t('general.cards'),
    id: 'cards',
  },
  {
    title: t('general.matches'),
    id: 'matches',
  },
  {
    title: t('general.winrate'),
    id: 'winrate',
  },
] as HeadingItem[];
</script>

<style scoped>
.small-table {
  --table-gap: 1px;
  --table-grid-auto-rows: 50px;
  --table-grid-template-columns: repeat(3, 1fr);
}
</style>
