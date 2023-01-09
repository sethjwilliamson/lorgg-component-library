import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import RegionsLine from './src/RegionsLine.vue';

/* istanbul ignore next */
RegionsLine.install = (app: App): void => {
  app.component(RegionsLine.name, RegionsLine);
};

export default RegionsLine as SFCWithInstall<App, typeof RegionsLine>;
