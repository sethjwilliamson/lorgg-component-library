import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DashboardNewCards from './src/DashboardNewCards.vue';

/* istanbul ignore next */
DashboardNewCards.install = (app: App): void => {
  app.component(DashboardNewCards.name, DashboardNewCards);
};

export default DashboardNewCards as SFCWithInstall<
  App,
  typeof DashboardNewCards
>;
