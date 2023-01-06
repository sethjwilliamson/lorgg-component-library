import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import GemsCost from './src/GemsCost.vue';

/* istanbul ignore next */
GemsCost.install = (app: App): void => {
  app.component(GemsCost.name, GemsCost);
};

export default GemsCost as SFCWithInstall<App, typeof GemsCost>;
