import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import StandardIcon from './src/StandardIcon.vue';

/* istanbul ignore next */
StandardIcon.install = (app: App): void => {
  app.component(StandardIcon.name, StandardIcon);
};

export default StandardIcon as SFCWithInstall<App, typeof StandardIcon>;
