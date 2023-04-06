<template>
  <SmallTable class="small-table" :heading-items="headingItems">
    <DashboardLeaderboardRow
      v-for="(row, index) in props.rows"
      :id="row.id"
      :key="row.id"
      :change="row.change"
      :lp="row.lp"
      :name="row.name"
      :rank="row.rank"
      :selected-banner-card="row.selectedBannerCard"
      :matches="row.matches"
      :index="index + 2"
    />
  </SmallTable>
</template>

<script setup lang="ts">
import SmallTable from '@/lib-components/SmallTable';
import { HeadingItem } from '@/lib-components/SmallTable/src/types';
import {
  DashboardLeaderboardTableProps,
  dashboardLeaderboardTableProps,
} from './types';
import { useI18n } from 'vue-i18n';
import DashboardLeaderboardRow from '@/lib-components/DashboardLeaderboardRow';
const { t } = useI18n();

const props: DashboardLeaderboardTableProps = defineProps(
  dashboardLeaderboardTableProps,
);

const headingItems = [
  {
    title: t('general.leaderboard'),
    id: 'leaderboard',
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
