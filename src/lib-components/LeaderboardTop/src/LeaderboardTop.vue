<template>
  <div class="leaderboard-top">
    <div class="heading-background"></div>
    <div class="heading-wrapper">
      <div
        v-for="server in dataJson.servers"
        :key="server.nameRef"
        class="heading"
      >
        {{ server.name }}
      </div>
    </div>
    <div
      v-for="(leaderboardTop10, index) in leaderboardTop10s"
      :key="index"
      class="top-10"
    >
      <LeaderboardTop10Region :players="leaderboardTop10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJsonStore } from '@/helpers/stores';
import LeaderboardTop10Region from '@/lib-components/LeaderboardTop10Region';
import { computed } from 'vue';
import { LeaderboardTopProps, leaderboardTopProps } from './types';

const dataJson = useJsonStore().jsons.dataJson;

const props: LeaderboardTopProps = defineProps(leaderboardTopProps);

const leaderboardTop10s = computed(() => {
  return dataJson.servers.map((server) => {
    return props.players
      .filter((player) => player.server === server.nameRef)
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 10);
  });
});
</script>

<style scoped>
.leaderboard-top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40px;
  grid-gap: 20px;
}

.heading-background {
  grid-column: -1 / 1;
  grid-row: 1;
  background-color: var(--color-background-1);
  border-radius: 15px;
}

.heading-wrapper {
  display: contents;
}

.heading {
  font-weight: bold;
  font-size: 18px;
  grid-row: 1;
  color: var(--color-primary-2);
  justify-content: center;
  align-items: center;
  display: flex;
}

.heading:nth-child(1) {
  grid-column: 1;
}
.heading:nth-child(2) {
  grid-column: 2;
}
.heading:nth-child(3) {
  grid-column: 3;
}
</style>
