import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import FilterRegions from './src/FilterRegions.vue';

/* istanbul ignore next */
FilterRegions.install = (app: App): void => {
  app.component(FilterRegions.name, FilterRegions);
};

export default FilterRegions as SFCWithInstall<App, typeof FilterRegions>;
