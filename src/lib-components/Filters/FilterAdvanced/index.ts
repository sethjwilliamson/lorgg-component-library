import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterAdvanced from './src/FilterAdvanced.vue';

/* istanbul ignore next */
FilterAdvanced.install = (app: App): void => {
  app.component(FilterAdvanced.name, FilterAdvanced);
};

export default FilterAdvanced as SFCWithInstall<App, typeof FilterAdvanced>;
