import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import GauntletIcon from './src/GauntletIcon.vue';

/* istanbul ignore next */
GauntletIcon.install = (app: App): void => {
  app.component(GauntletIcon.name, GauntletIcon);
};

export default GauntletIcon as SFCWithInstall<App, typeof GauntletIcon>;
