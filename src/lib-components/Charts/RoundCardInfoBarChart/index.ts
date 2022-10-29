import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import RoundCardInfoBarChart from './src/RoundCardInfoBarChart.vue';

/* istanbul ignore next */
RoundCardInfoBarChart.install = (app: App): void => {
  app.component(RoundCardInfoBarChart.name, RoundCardInfoBarChart);
};

export default RoundCardInfoBarChart as SFCWithInstall<
  App,
  typeof RoundCardInfoBarChart
>;
