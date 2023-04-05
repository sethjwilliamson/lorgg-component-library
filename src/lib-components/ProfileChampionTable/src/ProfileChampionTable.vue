<template>
  <SmallTable class="small-table" :heading-items="headingItems">
    <ProfileChampionRow
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
import ProfileChampionRow from '@/lib-components/ProfileChampionRow';
import SmallTable from '@/lib-components/SmallTable';
import { HeadingItem } from '@/lib-components/SmallTable/src/types';
import { ProfileChampionTableProps, profileChampionTableProps } from './types';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: ProfileChampionTableProps = defineProps(profileChampionTableProps);

const headingItems = [
  {
    title: t('general.champions'),
    id: 'champions',
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
  --table-grid-auto-rows: 40px;
  --table-grid-template-columns: repeat(3, 1fr);
}
</style>
