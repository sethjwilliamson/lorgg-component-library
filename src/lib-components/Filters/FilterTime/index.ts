import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterTime from './src/FilterTime.vue';

/* istanbul ignore next */
FilterTime.install = (app: App): void => {
  app.component(FilterTime.name, FilterTime);
};

export default FilterTime as SFCWithInstall<App, typeof FilterTime>;
