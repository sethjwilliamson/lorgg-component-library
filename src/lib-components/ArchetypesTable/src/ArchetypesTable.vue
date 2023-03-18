<template>
  <LargeTable
    class="large-table"
    :heading-items="headingItems"
    @toggle-sort="onToggleSort"
  >
    <ArchetypesRow
      v-for="(archetypeRow, index) in props.archetypeRows"
      :key="archetypeRow.deckcode"
      :archetype-id="archetypeRow.archetypeId"
      :cards="archetypeRow.cards"
      :deckcode="archetypeRow.deckcode"
      :index="index + 2"
      :matches="archetypeRow.matches"
      :playrate="archetypeRow.playrate"
      :regions="archetypeRow.regions"
      :wins="archetypeRow.wins"
    />
  </LargeTable>
</template>
<script setup lang="ts">
import ArchetypesRow from '@/lib-components/ArchetypesRow';
import { ArchetypesTableProps, archetypesTableProps } from './types';
import { useI18n } from 'vue-i18n';
import {
  HeadingItem,
  SortDirection,
} from '@/lib-components/LargeTable/src/types';
import LargeTable from '@/lib-components/LargeTable';
import { ref, Ref } from 'vue';
import { toggleSort } from '@/lib-components/ComponentFunctions';
const { t } = useI18n();

const props: ArchetypesTableProps = defineProps(archetypesTableProps);
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
    id: 'playrate',
    isShown: true,
    sortDirection: SortDirection.NEITHER,
    title: t('general.playrate'),
  },
]);

function onToggleSort(id: string) {
  toggleSort(id, headingItems);
}
</script>

<style scoped>
.large-table {
  --table-grid-auto-rows: 50px;
  --table-grid-template-columns: repeat(4, 1fr);
}
</style>
