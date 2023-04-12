import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import WinsLossesLine from './src/WinsLossesLine.vue';

/* istanbul ignore next */
WinsLossesLine.install = (app: App): void => {
  app.component(WinsLossesLine.name, WinsLossesLine);
};

export default WinsLossesLine as SFCWithInstall<App, typeof WinsLossesLine>;
