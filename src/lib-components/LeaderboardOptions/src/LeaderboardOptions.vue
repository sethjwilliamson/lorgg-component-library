<template>
  <div class="leaderboard-options">
    <div class="multiselects">
      <Multiselect
        v-model="selectedPlayers"
        :placeholder="t('general.players')"
        :mode="selectedRegion ? 'tags' : 'disabled'"
        :options="players"
        :searchable="true"
        label="name"
        value-prop="user_id"
      />
      <Multiselect
        v-model="selectedRegion"
        :placeholder="t('general.server')"
        :options="servers"
        label="name"
        value-prop="nameRef"
      />
      <Multiselect
        v-if="props.isGraphShown"
        v-model="selectedGraphOption"
        :options="graphOptions"
        :can-clear="false"
        label="name"
        value-prop="nameRef"
      />
    </div>
    <div class="details">
      <div class="players">
        {{ t('leaderboard.totalPlayers') }}:
        <span> {{ localeNumber(players.length) }}</span>
      </div>
      <div class="updated">
        {{ t('leaderboard.updated') }}:
        <span> {{ $dayjs(props.updatedAt * 60 * 1000).fromNow() }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ServerRegion } from '#/jsons';
import { localeNumber } from '@/helpers/functions';
import { useJsonStore } from '@/helpers/stores';
import Multiselect from '@vueform/multiselect/src/Multiselect';
import dayjs from 'dayjs';
import { computed, inject, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  GraphOption,
  GraphOptionValue,
  LeaderboardOptionsProps,
  leaderboardOptionsProps,
} from './types';
const { t } = useI18n();

const $dayjs = inject('dayjs') as typeof dayjs;

const props: LeaderboardOptionsProps = defineProps(leaderboardOptionsProps);
const emit = defineEmits<{
  (e: 'update:selectedPlayers', value: number[]): void;
  (e: 'update:selectedRegion', value: ServerRegion | null): void;
  (e: 'update:selectedGraphOption', value: GraphOptionValue): void;
}>();

const servers = useJsonStore().jsons.dataJson.servers;
const graphOptions: GraphOption[] = [
  {
    name: t('leaderboard.lp'),
    nameRef: 'lp',
  },
  {
    name: t('leaderboard.rank'),
    nameRef: 'rank',
  },
  {
    name: t('leaderboard.totalPlayers'),
    nameRef: 'totalPlayers',
  },
];

const selectedRegion = ref(props.selectedRegion);
const selectedPlayers = ref(props.selectedPlayers);
const selectedGraphOption = ref(props.selectedGraphOption);

const players = computed(() => {
  if (selectedRegion.value === null) {
    return props.players;
  }

  return props.players.filter((x) => x.server === selectedRegion.value);
});

watch(selectedRegion, (newVal) => {
  emit('update:selectedRegion', newVal);
  emit('update:selectedPlayers', []);
});
watch(selectedPlayers, (newVal) => {
  emit('update:selectedPlayers', newVal);
});
watch(selectedGraphOption, (newVal) => {
  emit('update:selectedGraphOption', newVal);
});
watch(
  () => props.selectedPlayers,
  (newVal) => {
    selectedPlayers.value = newVal;
  },
);
watch(
  () => props.selectedRegion,
  (newVal) => {
    selectedRegion.value = newVal;
  },
);
watch(
  () => props.selectedGraphOption,
  (newVal) => {
    selectedGraphOption.value = newVal;
  },
);

watch(
  () => props.isGraphShown,
  (newVal) => {
    if (!newVal) {
      return;
    }

    if (selectedPlayers.value.length > 0) {
      selectedGraphOption.value = 'lp';
    }
  },
);
</script>

<style scoped>
.leaderboard-options {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.multiselects {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
}

.details {
  color: var(--color-primary-2);
  display: flex;
  gap: 5px;
  justify-content: space-between;
}

.details span {
  font-weight: bold;
}

@media (max-width: 769px) {
  .leaderboard-options,
  .multiselects,
  .details {
    flex-direction: column;
    justify-content: center;
  }

  .multiselects {
    flex-direction: column-reverse;
  }

  .leaderboard-options {
    gap: 10px;
  }

  .details {
    text-align: center;
  }
}
</style>
