import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import LeaderboardTop from './src/LeaderboardTop.vue';

/* istanbul ignore next */
LeaderboardTop.install = (app: App): void => {
  app.component(LeaderboardTop.name, LeaderboardTop);
};

export default LeaderboardTop as SFCWithInstall<App, typeof LeaderboardTop>;
