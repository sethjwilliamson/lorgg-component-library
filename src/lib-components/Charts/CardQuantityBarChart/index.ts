import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardQuantityBarChart from './src/CardQuantityBarChart.vue';

/* istanbul ignore next */
CardQuantityBarChart.install = (app: App): void => {
  app.component(CardQuantityBarChart.name, CardQuantityBarChart);
};

export default CardQuantityBarChart as SFCWithInstall<
  App,
  typeof CardQuantityBarChart
>;
