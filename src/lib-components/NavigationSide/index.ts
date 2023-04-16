import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import NavigationSide from './src/NavigationSide.vue';

/* istanbul ignore next */
NavigationSide.install = (app: App): void => {
  app.component(NavigationSide.name, NavigationSide);
};

export default NavigationSide as SFCWithInstall<App, typeof NavigationSide>;
