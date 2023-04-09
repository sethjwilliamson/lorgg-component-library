<template>
  <div class="search-bar">
    <Multiselect
      placeholder="Search Cards or Players"
      value-prop="link"
      :clear-on-blur="false"
      :clear-on-search="false"
      :clear-on-select="false"
      :close-on-select="true"
      :delay="0"
      :filter-results="false"
      :groups="true"
      :min-chars="0"
      :resolve-on-load="false"
      :searchable="true"
      :options="async (query: string) => {
        return await fetchSeachResult(query)
      }"
      @open="(select$: any ) => {
        if ((select$).noOptions) {
          (select$).resolveOptions()
        }
      }"
      @search-change="onSearchChange"
      @select="onSelect"
    >
      <template #option="{ option }: { option: SearchBarOption }">
        <CardSliceItem
          v-if="option.type === 'card'"
          :key="`card-${option.link}`"
          class="card-slice-item"
          :maintain-aspect-ratio="true"
          :card-prop="option.card"
        />
        <CardSliceItem
          v-else
          :key="`player-${option.link}`"
          class="card-slice-item"
          :maintain-aspect-ratio="true"
          :ignore-card-item="true"
          :card-code-prop="option.cardCode"
          :color="option.color"
          :name="option.name"
          :mana-number="option.rank"
        />
      </template>
    </Multiselect>
  </div>
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect/src/Multiselect';
import {
  SearchBarOption,
  SearchBarOptionCard,
  SearchBarOptionPlayer,
} from './types';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useJsonStore } from '@/helpers/stores';
import CardSliceItem from '@/lib-components/CardSliceItem';
const { t } = useI18n();

const cardJson = useJsonStore().jsons.cardJson;
const searchVal = ref('');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onSelect(value: string, option: SearchBarOption, test: any) {
  test.clear();
  test.search = searchVal.value;
  // TODO: Implement
  console.log('LINK TO:', option.link);
}

function onSearchChange(query: string) {
  searchVal.value = query;
}

async function fetchSeachResult(query: string | null) {
  if (query === null) {
    return [
      {
        label: t('general.cards'),
        options: fetchCards('test'),
      },
      {
        label: t('general.players'),
        options: await fetchPlayers('test'),
      },
    ];
  }

  return [
    {
      label: t('general.cards'),
      options: fetchCards(query),
    },
    {
      label: t('general.players'),
      options: await fetchPlayers(query),
    },
  ];
}

function fetchCards(query: string): SearchBarOptionCard[] {
  const regexQuery = new RegExp(query, 'i');
  const regexStartsWithQuery = new RegExp(`^${query}`, 'i');

  const results = cardJson.filter(
    (x) =>
      !!x.name.match(regexQuery) ||
      !!x.description.match(regexQuery) ||
      !!x.descriptionRaw.match(regexQuery),
  );

  return results
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => a.cost - b.cost)
    .sort((a, b) => sortBooleans(a.collectible, b.collectible))
    .sort((a, b) =>
      sortBooleans(!!a.name.match(regexQuery), !!b.name.match(regexQuery)),
    )
    .sort((a, b) =>
      sortBooleans(
        regexStartsWithQuery.test(a.name),
        regexStartsWithQuery.test(b.name),
      ),
    )
    .slice(0, 5)
    .map((x) => {
      return {
        type: 'card',
        link: `/test/card/${x.cardCode}`,
        card: x,
      };
    });
}

function sortBooleans(a: boolean, b: boolean) {
  return a === b ? 0 : a ? -1 : 1;
}

async function fetchPlayers(query: string): Promise<SearchBarOptionPlayer[]> {
  return [
    {
      type: 'player',
      cardCode: '01IO001',
      color: 'var(--color-background-2-rgb)',
      link: `/test/player/${query}`,
      name: query,
      rank: 1,
    },
    {
      type: 'player',
      cardCode: '01IO002',
      color: '255, 255, 255',
      link: `/test/player/${query}2`,
      name: query,
      rank: 2,
    },
    {
      type: 'player',
      color: '0, 0, 0',
      link: `/test/player/${query}3`,
      name: query,
      rank: 3,
    },
    {
      type: 'player',
      link: `/test/player/${query}4`,
      name: query,
      rank: 4,
    },
    {
      type: 'player',
      link: `/test/player/${query}5`,
      name: query,
    },
  ];
}
</script>

<style scoped>
.search-bar {
  --ms-max-height: 90vh;
}

.card-slice-item {
  width: 260px;
}
</style>
