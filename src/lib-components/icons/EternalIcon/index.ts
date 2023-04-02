import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import EternalIcon from './src/EternalIcon.vue';

/* istanbul ignore next */
EternalIcon.install = (app: App): void => {
  app.component(EternalIcon.name, EternalIcon);
};

export default EternalIcon as SFCWithInstall<App, typeof EternalIcon>;
