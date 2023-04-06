import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DashboardLeaderboardTable from './src/DashboardLeaderboardTable.vue';

/* istanbul ignore next */
DashboardLeaderboardTable.install = (app: App): void => {
  app.component(DashboardLeaderboardTable.name, DashboardLeaderboardTable);
};

export default DashboardLeaderboardTable as SFCWithInstall<
  App,
  typeof DashboardLeaderboardTable
>;
