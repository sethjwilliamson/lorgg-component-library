<template>
  <LargeTable
    class="large-table"
    :heading-items="headingItems"
    :style="largeTableStyle"
    @toggle-sort="onToggleSort"
  >
    <CardsRow
      v-for="(cardRow, index) in props.cardRows"
      :key="cardRow.cardCode"
      :card-code="cardRow.cardCode"
      :matches="cardRow.matches"
      :wins="cardRow.wins"
      :index="index + 2"
      :avg-copies="cardRow.avgCopies"
      :drawn-winrate="cardRow.drawnWinrate"
      :kept-in-mulligan="cardRow.keptInMulligan"
      :mulligan-winrate="cardRow.mulliganWinrate"
      :inclusion="cardRow.inclusion"
      :turns-held="cardRow.turnsHeld"
      :turn-played="cardRow.turnPlayed"
      :toggled-stats="props.cardsRowToggle"
    />
  </LargeTable>
</template>
<script setup lang="ts">
import CardsRow from '@/lib-components/CardsRow';
import { cardsTableProps, CardsTableProps } from './types';
import { useI18n } from 'vue-i18n';
import {
  HeadingItem,
  SortDirection,
  TogglableHeadingItem,
} from '@/lib-components/LargeTable/src/types';
import LargeTable from '@/lib-components/LargeTable';
import { computed, ref, Ref } from 'vue';
import { toggleSort } from '@/lib-components/ComponentFunctions';
import { CardsRowToggle } from '@/lib-components/CardsRow/src/types';
const { t } = useI18n();

const props: CardsTableProps = defineProps(cardsTableProps);

const togglableHeadingItems: TogglableHeadingItem[] = [
  {
    id: 'card',
    isAlwaysShown: true,
    isSortable: false,
    title: t('general.card'),
  },
  {
    id: 'matches',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.matches'),
  },
  {
    id: 'winrate',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.winrate'),
  },
  {
    id: 'inclusion',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.inclusion'),
  },
  {
    id: 'avgCopies',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.avgCopies'),
  },
  {
    id: 'mulliganWinrate',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.mulliganWinrate'),
  },
  {
    id: 'keptInMulligan',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.keptInMulligan'),
  },
  {
    id: 'drawnWinrate',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.drawnWinrate'),
  },
  {
    id: 'turnsHeld',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.turnsHeld'),
  },
  {
    id: 'turnPlayed',
    isAlwaysShown: false,
    isSortable: true,
    title: t('general.turnPlayed'),
  },
];

let isSorted = false;

const headingItems: Ref<HeadingItem[]> = ref(
  togglableHeadingItems.map((x) => {
    let sortDirection = SortDirection.NEITHER;

    if (!x.isSortable) {
      sortDirection = SortDirection.NOT_SORTABLE;
    }

    if (!isSorted && x.isSortable) {
      sortDirection = SortDirection.DOWN;
      isSorted = true;
    }

    return {
      id: x.id,
      isShown: props.cardsRowToggle[x.id as keyof CardsRowToggle],
      sortDirection: sortDirection,
      title: x.title,
    };
  }),
);

const largeTableStyle = computed(() => {
  const columns = Object.values(props.cardsRowToggle).reduce(
    (prev) => prev + 1,
    0,
  );

  return { '--table-grid-template-columns': `repeat(${columns}, 1fr)` };
});

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
