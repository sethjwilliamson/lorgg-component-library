import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import LogoIcon from './src/LogoIcon.vue';

/* istanbul ignore next */
LogoIcon.install = (app: App): void => {
  app.component(LogoIcon.name, LogoIcon);
};

export default LogoIcon as SFCWithInstall<App, typeof LogoIcon>;
