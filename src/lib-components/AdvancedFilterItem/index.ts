import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import AdvancedFilterItem from './src/AdvancedFilterItem.vue';

/* istanbul ignore next */
AdvancedFilterItem.install = (app: App): void => {
  app.component(AdvancedFilterItem.name, AdvancedFilterItem);
};

export default AdvancedFilterItem as SFCWithInstall<
  App,
  typeof AdvancedFilterItem
>;
