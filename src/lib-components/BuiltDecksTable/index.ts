import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import BuiltDecksTable from './src/BuiltDecksTable.vue';

/* istanbul ignore next */
BuiltDecksTable.install = (app: App): void => {
  app.component(BuiltDecksTable.name, BuiltDecksTable);
};

export default BuiltDecksTable as SFCWithInstall<App, typeof BuiltDecksTable>;
