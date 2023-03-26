import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import LeaderboardDetailTable from './src/LeaderboardDetailTable.vue';

/* istanbul ignore next */
LeaderboardDetailTable.install = (app: App): void => {
  app.component(LeaderboardDetailTable.name, LeaderboardDetailTable);
};

export default LeaderboardDetailTable as SFCWithInstall<
  App,
  typeof LeaderboardDetailTable
>;
