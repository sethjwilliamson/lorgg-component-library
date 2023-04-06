import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DashboardCardTable from './src/DashboardCardTable.vue';

/* istanbul ignore next */
DashboardCardTable.install = (app: App): void => {
  app.component(DashboardCardTable.name, DashboardCardTable);
};

export default DashboardCardTable as SFCWithInstall<
  App,
  typeof DashboardCardTable
>;
