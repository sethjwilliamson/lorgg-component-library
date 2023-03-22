import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import FollowerIcon from './src/FollowerIcon.vue';

/* istanbul ignore next */
FollowerIcon.install = (app: App): void => {
  app.component(FollowerIcon.name, FollowerIcon);
};

export default FollowerIcon as SFCWithInstall<App, typeof FollowerIcon>;
