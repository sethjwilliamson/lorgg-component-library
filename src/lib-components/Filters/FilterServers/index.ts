import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterServers from './src/FilterServers.vue';

/* istanbul ignore next */
FilterServers.install = (app: App): void => {
  app.component(FilterServers.name, FilterServers);
};

export default FilterServers as SFCWithInstall<App, typeof FilterServers>;
