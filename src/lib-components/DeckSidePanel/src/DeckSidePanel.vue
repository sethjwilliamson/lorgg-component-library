<template>
  <div>
    <ArchetypeSidePanelHighlight
      :card-codes="championCardcodes"
      :regions="regions"
    />
    <SidePanelSectionPane :title="t('general.regions')">
      <RegionsLine :deck-code="props.deckcode" :describe-regions="true" />
    </SidePanelSectionPane>
    <SidePanelSectionPane :title="t('general.manaCurve')">
      <ManaCurveChart
        class="mana-curve-chart"
        :deck-code="props.deckcode"
        :padding-top="5"
        :show-data-labels="true"
        :data-labels-offset="-5"
        :tooltips-enabled="true"
        :display-x-scale="true"
        :animation="undefined"
      />
    </SidePanelSectionPane>
    <SidePanelSectionPane :title="t('general.type')">
      <InfoDoughtnutChart
        class="side-panel-chart"
        :deck-code="props.deckcode"
        info="typeRef"
      />
    </SidePanelSectionPane>
    <SidePanelSectionPane :title="t('general.rarity')">
      <InfoDoughtnutChart
        class="side-panel-chart"
        :deck-code="props.deckcode"
        info="rarityRef"
      />
    </SidePanelSectionPane>
    <FilterSampleSize
      v-model:filter-array="filters.sampleSizeFilters"
    ></FilterSampleSize>
    <FilterTime v-model:filter-array="filters.timeFilters"></FilterTime>
    <FilterServers v-model:filter-array="filters.serverFilters"></FilterServers>
  </div>
</template>

<script setup lang="ts">
import ArchetypeSidePanelHighlight from '@/lib-components/ArchetypeSidePanelHighlight';
import FilterSampleSize from '@/lib-components/Filters/FilterSampleSize';
import FilterTime from '@/lib-components/Filters/FilterTime';
import FilterServers from '@/lib-components/Filters/FilterServers';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import { computed, reactive, watch } from 'vue';
import {
  DeckSidePanelProps,
  deckSidePanelProps,
  DeckPageFilters,
} from './types';
import {
  getDeckObjectFromCode,
  getRegionsFromCode,
  isAChampion,
} from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
import { useI18n } from 'vue-i18n';
import InfoDoughtnutChart from '@/lib-components/Charts/InfoDoughnutChart';
import RegionsLine from '@/lib-components/RegionsLine';
import ManaCurveChart from '@/lib-components/Charts/ManaCurveChart';

const { t } = useI18n();

const props: DeckSidePanelProps = defineProps(deckSidePanelProps);
const emit = defineEmits<{
  (e: 'update:filters', value: DeckPageFilters): void;
}>();

const cardJson = useJsonStore().jsons.cardJsonObject;

const filters = reactive(props.filters);

const regions = computed(() => {
  return getRegionsFromCode(props.deckcode);
});
const championCardcodes = computed(() => {
  return Object.keys(getDeckObjectFromCode(props.deckcode)).filter((cardcode) =>
    isAChampion(cardJson[cardcode]),
  );
});

watch(filters, () => {
  emit('update:filters', filters);
});
</script>

<style scoped>
.side-panel-chart {
  height: 160px;
}
.mana-curve-chart {
  height: 120px;
}
</style>
