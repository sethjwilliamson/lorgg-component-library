import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FilterCardCodes from './src/FilterCardCodes.vue';

/* istanbul ignore next */
FilterCardCodes.install = (app: App): void => {
  app.component(FilterCardCodes.name, FilterCardCodes);
};

export default FilterCardCodes as SFCWithInstall<App, typeof FilterCardCodes>;
