import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import TippyText from './src/TippyText.vue';

/* istanbul ignore next */
TippyText.install = (app: App): void => {
  app.component(TippyText.name, TippyText);
};

export default TippyText as SFCWithInstall<App, typeof TippyText>;
