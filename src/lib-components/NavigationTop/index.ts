import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import NavigationTop from './src/NavigationTop.vue';

/* istanbul ignore next */
NavigationTop.install = (app: App): void => {
  app.component(NavigationTop.name, NavigationTop);
};

export default NavigationTop as SFCWithInstall<App, typeof NavigationTop>;
