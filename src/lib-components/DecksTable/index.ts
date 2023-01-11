import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DecksTable from './src/DecksTable.vue';

/* istanbul ignore next */
DecksTable.install = (app: App): void => {
  app.component(DecksTable.name, DecksTable);
};

export default DecksTable as SFCWithInstall<App, typeof DecksTable>;
