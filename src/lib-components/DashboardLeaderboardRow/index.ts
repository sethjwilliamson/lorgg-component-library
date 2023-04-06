import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DashboardLeaderboardRow from './src/DashboardLeaderboardRow.vue';

/* istanbul ignore next */
DashboardLeaderboardRow.install = (app: App): void => {
  app.component(DashboardLeaderboardRow.name, DashboardLeaderboardRow);
};

export default DashboardLeaderboardRow as SFCWithInstall<
  App,
  typeof DashboardLeaderboardRow
>;
