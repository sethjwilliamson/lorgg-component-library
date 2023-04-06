<template>
  <SmallTable class="small-table" :heading-items="headingItems">
    <template #heading>
      <div class="multiselect-wrapper">
        <Multiselect
          v-model="selectedRegion"
          class="multiselect"
          :placeholder="t('general.server')"
          :options="servers"
          :can-clear="false"
          label="name"
          value-prop="nameRef"
        />
      </div>
    </template>
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
import { useJsonStore } from '@/helpers/stores';
import { ref, watch } from 'vue';
import Multiselect from '@vueform/multiselect/src/Multiselect';
import { ServerRegion } from '#/jsons';
const { t } = useI18n();

const props: DashboardLeaderboardTableProps = defineProps(
  dashboardLeaderboardTableProps,
);

const emit = defineEmits<{
  (e: 'update:selectedRegion', value: ServerRegion | null): void;
}>();

const servers = useJsonStore().jsons.dataJson.servers;
const selectedRegion = ref(props.selectedRegion);

const headingItems = [
  {
    title: t('general.leaderboard'),
    id: 'leaderboard',
  },
] as HeadingItem[];

watch(selectedRegion, (newVal) => {
  emit('update:selectedRegion', newVal);
});
</script>

<style scoped>
.small-table {
  --table-gap: 1px;
  --table-grid-auto-rows: 50px;
  --table-grid-template-columns: repeat(3, 1fr);
}

.multiselect-wrapper {
  grid-column: 2 / -1;
  padding: 0 10px;
}
</style>
