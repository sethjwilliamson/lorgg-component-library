import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import ManaCurveChart from './src/ManaCurveChart.vue';

/* istanbul ignore next */
ManaCurveChart.install = (app: App): void => {
  app.component(ManaCurveChart.name, ManaCurveChart);
};

export default ManaCurveChart as SFCWithInstall<App, typeof ManaCurveChart>;
