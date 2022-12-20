import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterRanks from './src/FilterRanks.vue';

/* istanbul ignore next */
FilterRanks.install = (app: App): void => {
  app.component(FilterRanks.name, FilterRanks);
};

export default FilterRanks as SFCWithInstall<App, typeof FilterRanks>;
