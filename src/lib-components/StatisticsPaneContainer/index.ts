import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import StatisticsPaneContainer from './src/StatisticsPaneContainer.vue';

/* istanbul ignore next */
StatisticsPaneContainer.install = (app: App): void => {
  app.component(StatisticsPaneContainer.name, StatisticsPaneContainer);
};

export default StatisticsPaneContainer as SFCWithInstall<
  App,
  typeof StatisticsPaneContainer
>;
