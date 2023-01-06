import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import SimulateMulliganButton from './src/SimulateMulliganButton.vue';

/* istanbul ignore next */
SimulateMulliganButton.install = (app: App): void => {
  app.component(SimulateMulliganButton.name, SimulateMulliganButton);
};

export default SimulateMulliganButton as SFCWithInstall<
  App,
  typeof SimulateMulliganButton
>;
