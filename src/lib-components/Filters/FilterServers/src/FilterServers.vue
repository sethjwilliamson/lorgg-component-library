<template>
  <SidePanelSectionPane
    :filter-array="filterArray"
    :title="t('general.servers')"
    @clear:filter-array="onClear"
  >
    <div class="checkboxes-container">
      <CheckboxItem
        v-for="server of servers"
        :key="server.nameRef"
        :prompt="server.name"
        :is-selected="filterArray.includes(server.nameRef)"
        @update:is-selected="onUpdate(server.nameRef)"
      />
    </div>
  </SidePanelSectionPane>
</template>

<script setup lang="ts">
import { useJsonStore } from '@/helpers/stores';
import SidePanelSectionPane from '@/lib-components/SidePanelSectionPane';
import { FilterServersProps, filterServersProps } from './types';
import { useI18n } from 'vue-i18n';
import { reactive, watch } from 'vue';
import CheckboxItem from '@/lib-components/CheckboxItem';
const { t } = useI18n();

const props: FilterServersProps = defineProps(filterServersProps);
const emit = defineEmits<{
  (e: 'update:filterArray', value: Array<string>): void;
}>();

const servers = useJsonStore().jsons.dataJson.servers;
const filterArray = reactive(props.filterArray);

watch(filterArray, () => {
  emit('update:filterArray', filterArray);
});

function onClear() {
  filterArray.splice(0);
}

function onUpdate(nameRef: string) {
  const index = filterArray.indexOf(nameRef);

  if (index === -1) {
    filterArray.push(nameRef);
    return;
  }

  filterArray.splice(index, 1);
}
</script>
