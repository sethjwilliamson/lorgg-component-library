import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterKeywords from './src/FilterKeywords.vue';

/* istanbul ignore next */
FilterKeywords.install = (app: App): void => {
  app.component(FilterKeywords.name, FilterKeywords);
};

export default FilterKeywords as SFCWithInstall<App, typeof FilterKeywords>;
