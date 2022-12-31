<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('general.regions')"
    @clear:filter-array="onClear"
  >
    <div class="checkboxes-container">
      <CheckboxItem
        :prompt="t('general.patch')"
        :is-selected="
          filterArray.filter((x) => !x.startsWith('patch')).length === 0
        "
        @update:is-selected="onButtonUpdate('patch')"
      />
      <CheckboxItem
        :prompt="t('general.season')"
        :is-selected="filterArray.includes('season')"
        @update:is-selected="onButtonUpdate('season')"
      />
      <CheckboxItem
        :prompt="t('general.pastDays', 7)"
        :is-selected="filterArray.includes('past7days')"
        @update:is-selected="onButtonUpdate('past7days')"
      />
      <CheckboxItem
        :prompt="t('general.pastDays', 3)"
        :is-selected="filterArray.includes('past3days')"
        @update:is-selected="onButtonUpdate('past3days')"
      />
      <CheckboxItem
        :prompt="t('general.pastHours', 24)"
        :is-selected="filterArray.includes('past24hours')"
        @update:is-selected="onButtonUpdate('past24hours')"
      />
      <CheckboxItem
        :prompt="t('general.pastHour')"
        :is-selected="filterArray.includes('pastHour')"
        @update:is-selected="onButtonUpdate('pastHour')"
      />

      <MultiSelect
        v-if="filterArray.filter((x) => !x.startsWith('patch')).length === 0"
        v-model="selectedPatch"
        :options="patches"
        :searchable="true"
        label="name"
        value-prop="nameRef"
      />

      <MultiSelect
        v-if="filterArray.includes('season')"
        v-model="selectedSeason"
        :options="seasons"
        :searchable="true"
        label="name"
        value-prop="nameRef"
      />
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import { FilterTimeProps, filterTimeProps } from './types';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane/src/SidePanelSectionPane.vue';
import { useJsonStore } from '@/helpers/stores';
import CheckboxItem from '@/lib-components/CheckboxItem/src/CheckboxItem.vue';
import MultiSelect from '@vueform/multiselect';
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props: FilterTimeProps = defineProps(filterTimeProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<string>): void;
}>();

const patches = useJsonStore().jsons.dataJson.patches;
const seasons = useJsonStore().jsons.dataJson.seasons;

const filterArray = reactive(props.filterArray);
const selectedPatch = ref(null as string | null);
const selectedSeason = ref(null as string | null);

const filterArrayPatch = filterArray.find((x) => x.startsWith('patch_'));
if (filterArrayPatch) {
  selectedPatch.value = filterArrayPatch;
}

const filterArraySeason = filterArray.find((x) => x.startsWith('season_'));
if (filterArraySeason) {
  selectedSeason.value = filterArraySeason;
}

watch(filterArray, () => {
  emit('update:filterArray', filterArray);
});

watch(selectedPatch, (newVal, oldVal) => {
  onSelectedUpdate(newVal, oldVal);
});

watch(selectedSeason, (newVal, oldVal) => {
  onSelectedUpdate(newVal, oldVal);
});

function onSelectedUpdate(newVal: string | null, oldVal: string | null) {
  console.log(oldVal, newVal);
  if (oldVal) {
    filterArray.splice(filterArray.indexOf(oldVal), 1);
  }

  if (newVal) {
    filterArray.push(newVal);
  }

  console.log(filterArray);
}

function onClear() {
  filterArray.splice(0);
  selectedPatch.value = null;
  selectedSeason.value = null;
}

function onButtonUpdate(nameRef: string) {
  filterArray.splice(0);

  if (nameRef !== 'patch') {
    filterArray.push(nameRef);
  }

  if (nameRef === 'patch' && selectedPatch.value) {
    filterArray.push(selectedPatch.value);
  }

  if (nameRef === 'season' && selectedSeason.value) {
    filterArray.push(selectedSeason.value);
  }
}
</script>

<style scoped>
.multiselect {
  grid-column: span 2;
}
</style>
