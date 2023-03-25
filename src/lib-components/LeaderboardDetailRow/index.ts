import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import LeaderboardDetailRow from './src/LeaderboardDetailRow.vue';

/* istanbul ignore next */
LeaderboardDetailRow.install = (app: App): void => {
  app.component(LeaderboardDetailRow.name, LeaderboardDetailRow);
};

export default LeaderboardDetailRow as SFCWithInstall<
  App,
  typeof LeaderboardDetailRow
>;
