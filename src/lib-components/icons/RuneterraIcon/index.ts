import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import RuneterraIcon from './src/RuneterraIcon.vue';

/* istanbul ignore next */
RuneterraIcon.install = (app: App): void => {
  app.component(RuneterraIcon.name, RuneterraIcon);
};

export default RuneterraIcon as SFCWithInstall<App, typeof RuneterraIcon>;
