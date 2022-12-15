import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterTypes from './src/FilterTypes.vue';

/* istanbul ignore next */
FilterTypes.install = (app: App): void => {
  app.component(FilterTypes.name, FilterTypes);
};

export default FilterTypes as SFCWithInstall<App, typeof FilterTypes>;
