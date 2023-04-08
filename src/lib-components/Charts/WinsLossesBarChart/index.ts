import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import WinsLossesBarChart from './src/WinsLossesBarChart.vue';

/* istanbul ignore next */
WinsLossesBarChart.install = (app: App): void => {
  app.component(WinsLossesBarChart.name, WinsLossesBarChart);
};

export default WinsLossesBarChart as SFCWithInstall<
  App,
  typeof WinsLossesBarChart
>;
