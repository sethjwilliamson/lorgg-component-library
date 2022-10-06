import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import TipTap from './src/TipTap.vue';

/* istanbul ignore next */
TipTap.install = (app: App): void => {
  app.component(TipTap.name, TipTap);
};

export default TipTap as SFCWithInstall<App, typeof TipTap>;
