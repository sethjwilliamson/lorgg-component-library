import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterSets from './src/FilterSets.vue';

/* istanbul ignore next */
FilterSets.install = (app: App): void => {
  app.component(FilterSets.name, FilterSets);
};

export default FilterSets as SFCWithInstall<App, typeof FilterSets>;
