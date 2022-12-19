import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterSampleSize from './src/FilterSampleSize.vue';

/* istanbul ignore next */
FilterSampleSize.install = (app: App): void => {
  app.component(FilterSampleSize.name, FilterSampleSize);
};

export default FilterSampleSize as SFCWithInstall<App, typeof FilterSampleSize>;
