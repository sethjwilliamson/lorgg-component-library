import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import LeaderboardChart from './src/LeaderboardChart.vue';

/* istanbul ignore next */
LeaderboardChart.install = (app: App): void => {
  app.component(LeaderboardChart.name, LeaderboardChart);
};

export default LeaderboardChart as SFCWithInstall<App, typeof LeaderboardChart>;
