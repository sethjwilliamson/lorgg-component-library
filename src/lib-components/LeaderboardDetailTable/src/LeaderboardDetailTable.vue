<template>
  <LargeTable
    class="large-table"
    :heading-items="headingItems"
    @toggle-sort="onToggleSort"
  >
    <LeaderboardDetailRow
      v-for="(player, index) in props.players"
      :key="index"
      v-bind="player"
      :index="index + 2"
    />
  </LargeTable>
</template>
<script setup lang="ts">
import {
  leaderboardDetailTableProps,
  LeaderboardDetailTableProps,
} from './types';
import { useI18n } from 'vue-i18n';
import {
  HeadingItem,
  SortDirection,
} from '@/lib-components/LargeTable/src/types';
import LargeTable from '@/lib-components/LargeTable';
import { ref, Ref } from 'vue';
import { toggleSort } from '@/lib-components/ComponentFunctions';
import LeaderboardDetailRow from '@/lib-components/LeaderboardDetailRow';
const { t } = useI18n();

const props: LeaderboardDetailTableProps = defineProps(
  leaderboardDetailTableProps,
);
const headingItems: Ref<HeadingItem[]> = ref([
  {
    id: 'player',
    isShown: true,
    sortDirection: SortDirection.UP,
    title: t('general.player'),
  },
  {
    id: 'lp',
    isShown: true,
    sortDirection: SortDirection.NEITHER,
    title: t('general.lp'),
  },
  {
    id: 'change',
    isShown: true,
    sortDirection: SortDirection.NEITHER,
    title: t('general.change'),
  },
  {
    id: 'matches',
    isShown: true,
    sortDirection: SortDirection.NEITHER,
    title: t('general.matches'),
  },
  {
    id: 'winrate',
    isShown: true,
    sortDirection: SortDirection.NEITHER,
    title: t('general.winrate'),
  },
  {
    id: 'favoriteDeck',
    isShown: true,
    sortDirection: SortDirection.NOT_SORTABLE,
    title: t('general.favoriteDeck'),
  },
]);

function onToggleSort(id: string) {
  toggleSort(id, headingItems);
}
</script>

<style scoped>
.large-table {
  --table-grid-auto-rows: 50px;
  --table-grid-template-columns: repeat(6, 1fr);
}
</style>
