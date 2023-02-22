<template>
  <LargeTable
    class="large-table"
    :heading-items="headingItems"
    @toggle-sort="toggleSort"
  >
    <DecksRow
      v-for="(deckRow, index) in props.deckRows"
      :key="deckRow.deckCode"
      :deckcode="deckRow.deckCode"
      :matches="deckRow.matches"
      :wins="deckRow.wins"
      :index="index + 2"
    />
  </LargeTable>
</template>
<script setup lang="ts">
import DecksRow from '@/lib-components/DecksRow';
import { DecksTableProps, decksTableProps } from './types';
import { useI18n } from 'vue-i18n';
import {
  HeadingItem,
  SortDirection,
} from '@/lib-components/LargeTable/src/types';
import LargeTable from '@/lib-components/LargeTable';
import { ref, Ref } from 'vue';
const { t } = useI18n();

const props: DecksTableProps = defineProps(decksTableProps);

const headingItems: Ref<HeadingItem[]> = ref([
  {
    id: 'deck',
    isShown: true,
    sortDirection: SortDirection.NOT_SORTABLE,
    title: t('general.deck'),
  },
  {
    id: 'matches',
    isShown: true,
    sortDirection: SortDirection.DOWN,
    title: t('general.matches'),
  },
  {
    id: 'winrate',
    isShown: true,
    sortDirection: SortDirection.NEITHER,
    title: t('general.winrate'),
  },
  {
    id: 'manaCurve',
    isShown: true,
    sortDirection: SortDirection.NOT_SORTABLE,
    title: t('general.manaCurve'),
  },
  {
    id: 'cost',
    isShown: true,
    sortDirection: SortDirection.NOT_SORTABLE,
    title: t('general.cost'),
  },
]);

function toggleSort(id: string) {
  const headingItem = headingItems.value.find((x) => x.id === id);
  
  if (
    !headingItem ||
    headingItem.sortDirection === SortDirection.NOT_SORTABLE
  ) {
    return;
  }

  const sortDirection = headingItem.sortDirection
  clearSorts()

  if (sortDirection === SortDirection.NEITHER) {
    headingItem.sortDirection = SortDirection.DOWN;
    return;
  }

  if (sortDirection === SortDirection.DOWN) {
    headingItem.sortDirection = SortDirection.UP;
    return;
  }

  headingItem.sortDirection = SortDirection.DOWN;
}

function clearSorts() {
  headingItems.value.forEach((headingItem) => {
    if (headingItem.sortDirection !== SortDirection.NOT_SORTABLE) {
      headingItem.sortDirection = SortDirection.NEITHER;
    }
  });
}
</script>

<style scoped>
.large-table {
  --table-grid-auto-rows: 50px;
  --table-grid-template-columns: repeat(5, 1fr) 50px;
}
</style>
