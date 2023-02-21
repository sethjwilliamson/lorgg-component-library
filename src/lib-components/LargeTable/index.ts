import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import LargeTable from './src/LargeTable.vue';

/* istanbul ignore next */
LargeTable.install = (app: App): void => {
  app.component(LargeTable.name, LargeTable);
};

export default LargeTable as SFCWithInstall<App, typeof LargeTable>;
