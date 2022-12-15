import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterRarities from './src/FilterRarities.vue';

/* istanbul ignore next */
FilterRarities.install = (app: App): void => {
  app.component(FilterRarities.name, FilterRarities);
};

export default FilterRarities as SFCWithInstall<App, typeof FilterRarities>;
