<template>
  <LargeTable
    class="large-table"
    :heading-items="headingItems"
    @toggle-sort="onToggleSort"
  >
    <DecksRow
      v-for="(deckRow, index) in props.deckRows"
      :id="deckRow.id"
      :key="deckRow.id"
      type="built"
      :deckcode="deckRow.deckCode"
      :name="deckRow.name"
      :created-at="deckRow.createdAt"
      :updated-at="deckRow.updatedAt"
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
    id: 'name',
    isShown: true,
    sortDirection: SortDirection.NEITHER,
    title: t('general.name'),
  },
  {
    id: 'updatedAt',
    isShown: true,
    sortDirection: SortDirection.DOWN,
    title: t('general.updated'),
  },
  {
    id: 'createdAt',
    isShown: true,
    sortDirection: SortDirection.NEITHER,
    title: t('general.created'),
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

function onToggleSort(id: string) {
  toggleSort(id, headingItems);
}
</script>

<style scoped>
.large-table {
  --table-grid-auto-rows: 50px;
  --table-grid-template-columns: repeat(6, 1fr) 50px;
}
</style>
