import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DashboardCardRow from './src/DashboardCardRow.vue';

/* istanbul ignore next */
DashboardCardRow.install = (app: App): void => {
  app.component(DashboardCardRow.name, DashboardCardRow);
};

export default DashboardCardRow as SFCWithInstall<App, typeof DashboardCardRow>;
