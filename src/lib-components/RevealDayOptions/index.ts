import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import RevealDayOptions from './src/RevealDayOptions.vue';

/* istanbul ignore next */
RevealDayOptions.install = (app: App): void => {
  app.component(RevealDayOptions.name, RevealDayOptions);
};

export default RevealDayOptions as SFCWithInstall<App, typeof RevealDayOptions>;
