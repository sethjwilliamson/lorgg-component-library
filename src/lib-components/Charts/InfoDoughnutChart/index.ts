import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import InfoDoughtnutChart from './src/InfoDoughtnutChart.vue';

/* istanbul ignore next */
InfoDoughtnutChart.install = (app: App): void => {
  app.component(InfoDoughtnutChart.name, InfoDoughtnutChart);
};

export default InfoDoughtnutChart as SFCWithInstall<
  App,
  typeof InfoDoughtnutChart
>;
