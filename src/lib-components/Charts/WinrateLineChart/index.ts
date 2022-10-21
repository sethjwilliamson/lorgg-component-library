import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import WinrateLineChart from './src/WinrateLineChart.vue';

/* istanbul ignore next */
WinrateLineChart.install = (app: App): void => {
  app.component(WinrateLineChart.name, WinrateLineChart);
};

export default WinrateLineChart as SFCWithInstall<App, typeof WinrateLineChart>;
