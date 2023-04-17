import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import NavigationTopDesktop from './src/NavigationTopDesktop.vue';

/* istanbul ignore next */
NavigationTopDesktop.install = (app: App): void => {
  app.component(NavigationTopDesktop.name, NavigationTopDesktop);
};

export default NavigationTopDesktop as SFCWithInstall<
  App,
  typeof NavigationTopDesktop
>;
