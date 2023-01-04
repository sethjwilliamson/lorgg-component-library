import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterDecks from './src/FilterDecks.vue';

/* istanbul ignore next */
FilterDecks.install = (app: App): void => {
  app.component(FilterDecks.name, FilterDecks);
};

export default FilterDecks as SFCWithInstall<App, typeof FilterDecks>;
