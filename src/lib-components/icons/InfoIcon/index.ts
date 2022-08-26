import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import InfoIcon from './src/InfoIcon.vue';

/* istanbul ignore next */
InfoIcon.install = (app: App): void => {
  app.component(InfoIcon.name, InfoIcon);
};

export default InfoIcon as SFCWithInstall<App, typeof InfoIcon>;
