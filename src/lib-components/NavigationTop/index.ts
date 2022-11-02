import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import NagivationTop from './src/NavigationTop.vue';

/* istanbul ignore next */
NagivationTop.install = (app: App): void => {
  app.component(NagivationTop.name, NagivationTop);
};

export default NagivationTop as SFCWithInstall<App, typeof NagivationTop>;
