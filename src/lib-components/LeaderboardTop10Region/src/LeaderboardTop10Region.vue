<template>
  <div class="leaderboard-top-10-region">
    <CardSliceItem
      v-for="player in props.players"
      :key="player.user_id"
      :card-code-prop="player.selected_banner_card ?? undefined"
      :color="player.selected_banner_color ?? 'var(--color-background-2-rgb)'"
      :mana-number="player.rank + 1"
      :name="player.name"
      :quantity-number="player.lp"
      :ignore-card-item="true"
    />
  </div>
</template>

<script setup lang="ts">
import CardSliceItem from '@/lib-components/CardSliceItem';
import {
  LeaderboardTop10RegionProps,
  leaderboardTop10RegionProps,
} from './types';

const props: LeaderboardTop10RegionProps = defineProps(
  leaderboardTop10RegionProps,
);
</script>

<style scoped>
.leaderboard-top-10-region {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.leaderboard-top-10-region div:nth-child(1) {
  --card-slice-aspect-ratio: 33.33333%;
}
</style>
