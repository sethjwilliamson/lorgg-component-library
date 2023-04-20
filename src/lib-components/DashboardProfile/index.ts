import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DashboardProfile from './src/DashboardProfile.vue';

/* istanbul ignore next */
DashboardProfile.install = (app: App): void => {
  app.component(DashboardProfile.name, DashboardProfile);
};

export default DashboardProfile as SFCWithInstall<App, typeof DashboardProfile>;
