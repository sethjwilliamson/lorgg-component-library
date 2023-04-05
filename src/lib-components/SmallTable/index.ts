import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import SmallTable from './src/SmallTable.vue';

/* istanbul ignore next */
SmallTable.install = (app: App): void => {
  app.component(SmallTable.name, SmallTable);
};

export default SmallTable as SFCWithInstall<App, typeof SmallTable>;
