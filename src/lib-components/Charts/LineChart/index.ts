import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import LineChart from './src/LineChart.vue';

/* istanbul ignore next */
LineChart.install = (app: App): void => {
  app.component(LineChart.name, LineChart);
};

export default LineChart as SFCWithInstall<App, typeof LineChart>;
