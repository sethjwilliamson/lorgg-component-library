import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import NavigationTopMobile from './src/NavigationTopMobile.vue';

/* istanbul ignore next */
NavigationTopMobile.install = (app: App): void => {
  app.component(NavigationTopMobile.name, NavigationTopMobile);
};

export default NavigationTopMobile as SFCWithInstall<
  App,
  typeof NavigationTopMobile
>;
