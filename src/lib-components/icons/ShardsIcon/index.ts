import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import ShardsIcon from './src/ShardsIcon.vue';

/* istanbul ignore next */
ShardsIcon.install = (app: App): void => {
  app.component(ShardsIcon.name, ShardsIcon);
};

export default ShardsIcon as SFCWithInstall<App, typeof ShardsIcon>;
