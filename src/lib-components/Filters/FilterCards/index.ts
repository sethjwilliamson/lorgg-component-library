import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterCards from './src/FilterCards.vue';

/* istanbul ignore next */
FilterCards.install = (app: App): void => {
  app.component(FilterCards.name, FilterCards);
};

export default FilterCards as SFCWithInstall<App, typeof FilterCards>;
