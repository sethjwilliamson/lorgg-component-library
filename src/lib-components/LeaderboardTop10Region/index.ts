import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import LeaderboardTop10Region from './src/LeaderboardTop10Region.vue';

/* istanbul ignore next */
LeaderboardTop10Region.install = (app: App): void => {
  app.component(LeaderboardTop10Region.name, LeaderboardTop10Region);
};

export default LeaderboardTop10Region as SFCWithInstall<
  App,
  typeof LeaderboardTop10Region
>;
