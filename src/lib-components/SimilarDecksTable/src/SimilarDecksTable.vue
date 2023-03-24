<template>
  <LargeTable
    class="large-table"
    :heading-items="headingItems"
    @toggle-sort="onToggleSort"
  >
    <DecksRow
      v-for="(deckRow, index) in props.deckRows"
      :key="deckRow.deckcode"
      type="similar"
      :deckcode="deckRow.deckcode"
      :matches="deckRow.matches"
      :wins="deckRow.wins"
      :compared-deckcode="props.originalDeckcode"
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
import { toggleSort } from '@/lib-components/ComponentFunctions';
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
    id: 'cost',
    isShown: true,
    sortDirection: SortDirection.NOT_SORTABLE,
    title: t('general.cost'),
  },
  {
    id: 'differences',
    isShown: true,
    sortDirection: SortDirection.NOT_SORTABLE,
    title: t('general.deckDifferences'),
  },
]);

function onToggleSort(id: string) {
  toggleSort(id, headingItems);
}
</script>

<style scoped>
.large-table {
  --table-grid-auto-rows: 50px;
  --table-grid-template-columns: repeat(4, min-content) 1fr 50px;
}
</style>
