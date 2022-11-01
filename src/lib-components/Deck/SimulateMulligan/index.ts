import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import SimulateMulligan from './src/SimulateMulligan.vue';

/* istanbul ignore next */
SimulateMulligan.install = (app: App): void => {
  app.component(SimulateMulligan.name, SimulateMulligan);
};

export default SimulateMulligan as SFCWithInstall<App, typeof SimulateMulligan>;
