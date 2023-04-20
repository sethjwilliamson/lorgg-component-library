import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DashboardSignUp from './src/DashboardSignUp.vue';

/* istanbul ignore next */
DashboardSignUp.install = (app: App): void => {
  app.component(DashboardSignUp.name, DashboardSignUp);
};

export default DashboardSignUp as SFCWithInstall<App, typeof DashboardSignUp>;
