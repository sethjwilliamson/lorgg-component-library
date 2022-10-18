import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import WinrateDoughtnutChart from './src/WinrateDoughtnutChart.vue';

/* istanbul ignore next */
WinrateDoughtnutChart.install = (app: App): void => {
  app.component(WinrateDoughtnutChart.name, WinrateDoughtnutChart);
};

export default WinrateDoughtnutChart as SFCWithInstall<
  App,
  typeof WinrateDoughtnutChart
>;
