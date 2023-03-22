import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import LandmarkIcon from './src/LandmarkIcon.vue';

/* istanbul ignore next */
LandmarkIcon.install = (app: App): void => {
  app.component(LandmarkIcon.name, LandmarkIcon);
};

export default LandmarkIcon as SFCWithInstall<App, typeof LandmarkIcon>;
