import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import RevealDayOption from './src/RevealDayOption.vue';

/* istanbul ignore next */
RevealDayOption.install = (app: App): void => {
  app.component(RevealDayOption.name, RevealDayOption);
};

export default RevealDayOption as SFCWithInstall<App, typeof RevealDayOption>;
