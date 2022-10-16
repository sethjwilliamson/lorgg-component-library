import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import ToggleSwitch from './src/ToggleSwitch.vue';

/* istanbul ignore next */
ToggleSwitch.install = (app: App): void => {
  app.component(ToggleSwitch.name, ToggleSwitch);
};

export default ToggleSwitch as SFCWithInstall<App, typeof ToggleSwitch>;
