import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import FilterManaCost from './src/FilterManaCost.vue';

/* istanbul ignore next */
FilterManaCost.install = (app: App): void => {
  app.component(FilterManaCost.name, FilterManaCost);
};

export default FilterManaCost as SFCWithInstall<App, typeof FilterManaCost>;
