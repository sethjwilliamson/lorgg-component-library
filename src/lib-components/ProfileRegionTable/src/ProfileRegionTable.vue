<template>
  <SmallTable class="small-table" :heading-items="headingItems">
    <ProfileRegionRow
      v-for="row in props.rows"
      :key="row.regionNameRef"
      :region-name-ref="row.regionNameRef"
      :matches="row.matches"
      :wins="row.wins"
      :index="row.index + 2"
    />
  </SmallTable>
</template>

<script setup lang="ts">
import ProfileRegionRow from '@/lib-components/ProfileRegionRow';
import SmallTable from '@/lib-components/SmallTable';
import { HeadingItem } from '@/lib-components/SmallTable/src/types';
import { useI18n } from 'vue-i18n';
import { profileRegionTableProps, ProfileRegionTableProps } from './types';
const { t } = useI18n();

const props: ProfileRegionTableProps = defineProps(profileRegionTableProps);

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
  --table-grid-auto-rows: 50px;
  --table-grid-template-columns: repeat(3, 1fr);
}
</style>
