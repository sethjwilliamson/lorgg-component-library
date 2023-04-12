<template>
  <div class="profile-game-type-winrate">
    <div class="game-type">
      {{ props.gameType }}
    </div>
    <WinsLossesLine :matches="props.matches" :wins="props.wins" />
  </div>
</template>

<script setup lang="ts">
import WinsLossesLine from '@/lib-components/WinsLossesLine';
import {
  ProfileGameTypeWinrateProps,
  profileGameTypeWinrateProps,
} from './types';

const props: ProfileGameTypeWinrateProps = defineProps(
  profileGameTypeWinrateProps,
);
</script>

<style scoped>
.profile-game-type-winrate {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  background-color: var(--color-background-1);
  border-radius: 10px;
}

.game-type {
  color: var(--color-primary-2);
  font-weight: bold;
}
</style>
