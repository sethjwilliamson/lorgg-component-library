<template>
  <div class="dashboard-profile">
    <div class="profile-banner">
      <img
        alt="Profile Banner"
        :src="`https://lor.gg/storage/cards/banner/${
          props.bannerCardCode ?? '05BC160'
        }.png`"
        class="profile-banner-img"
      />
      <CircleCardItem
        :card-code-prop="props.iconCardCode ?? '05BC160'"
        :ignore-card-item="true"
        :color-override="props.bannerColor"
      />
      <div class="edit-banner">
        <FontAwesomeIcon icon="pencil-alt" />
      </div>
    </div>
    <div class="profile-text">
      <LocalizedLink :to="{ name: 'profile' }" class="profile-name">
        {{ props.name }}
      </LocalizedLink>
      <div class="profile-region">{{ props.server }}</div>
    </div>
    <div class="profile-tiles">
      <div class="profile-tile">
        <div class="tile-content">
          <div class="games-text">{{ localeNumber(props.matches, 0, 10) }}</div>
        </div>
        <div class="tile-text">{{ t('general.gamesPlayed') }}</div>
      </div>
      <div class="profile-tile">
        <div class="chart-container">
          <div class="tile-content">
            <WinrateDoughtnutChart
              :matches="props.matches"
              :wins="props.wins"
              :cutout="30"
            />
          </div>
        </div>
        <div class="tile-text">{{ t('general.winrate') }}</div>
      </div>
    </div>
    <div v-if="props.premiumExpiration" class="profile-premium-expiration">
      {{ t('general.premium') }}
      {{ props.isPremiumRenewing ? t('general.renews') : t('general.expires') }}
      <b class="profile-premium-expiration-time">{{
        $dayjs(props.premiumExpiration).fromNow()
      }}</b>
    </div>

    <LocalizedLink
      v-else
      :to="{ name: 'premium' }"
      class="profile-premium fancy-button"
    >
      {{ t('general.getPremium') }}
    </LocalizedLink>
  </div>
</template>

<script setup lang="ts">
import CircleCardItem from '@/lib-components/CircleCardItem';
import { DashboardProfileProps, dashboardProfileProps } from './types';
import WinrateDoughtnutChart from '@/lib-components/Charts/WinrateDoughtnutChart';
import { inject } from 'vue';
import dayjs from 'dayjs';
import { useI18n } from 'vue-i18n';
import { localeNumber } from '@/helpers/functions';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const { t } = useI18n();

const $dayjs = inject('dayjs') as typeof dayjs;

const props: DashboardProfileProps = defineProps(dashboardProfileProps);
</script>

<style scoped>
.dashboard-profile {
  background-color: var(--color-background-1);
  border-radius: 20px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 15px;
  gap: 10px;
}

.profile-banner {
  --icon-size: 120px;
  position: relative;
  height: var(--icon-size);
  margin-bottom: calc(var(--icon-size) / 2);
  width: 100%;
  display: flex;
  justify-content: center;
}

.profile-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.circle-card-item {
  --circle-card-item-border-size: 5px;
  position: absolute;
  border-radius: 100px;
  height: var(--icon-size);
  width: var(--icon-size);
  bottom: calc(var(--icon-size) / -2);
  border: var(--color-background-1) 5px solid;
}

.edit-banner {
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--color-primary-2);
  filter: drop-shadow(0px 0px 2px black);
}

.edit-banner:hover {
  color: var(--color-0)
}

.profile-name {
  color: var(--color-primary-2);
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
}

.profile-region {
  font-size: 20px;
  color: var(--color-0);
  text-align: center;
}

.profile-tiles {
  flex-grow: 1;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.profile-tile {
  background-color: var(--color-background-2);
  flex-grow: 1;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 0;
  padding: 10px;
  gap: 10px;
  flex: 1 1 0;
  min-width: 0;
}

.tile-content {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.tile-text {
  text-align: center;
  font-size: 16px;
  color: var(--color-0);
  white-space: nowrap;
}

.games-text {
  color: var(--color-primary-2);
  font-weight: bold;
  font-size: 44px;
  text-align: center;
}

.chart-container {
  height: 90px;
  width: 90px;
  position: relative;
}

.profile-premium-expiration {
  color: var(--color-0);
}

.profile-premium-expiration-time {
  color: var(--color-primary-2);
}

.fancy-button {
  color: var(--color-primary-2);
  box-sizing: border-box;
  width: 100%;
}
</style>
