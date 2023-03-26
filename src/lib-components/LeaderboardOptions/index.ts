import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import LeaderboardOptions from './src/LeaderboardOptions.vue';

/* istanbul ignore next */
LeaderboardOptions.install = (app: App): void => {
  app.component(LeaderboardOptions.name, LeaderboardOptions);
};

export default LeaderboardOptions as SFCWithInstall<
  App,
  typeof LeaderboardOptions
>;
