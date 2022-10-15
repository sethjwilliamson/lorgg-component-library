import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import ShareButton from './src/ShareButton.vue';

/* istanbul ignore next */
ShareButton.install = (app: App): void => {
  app.component(ShareButton.name, ShareButton);
};

export default ShareButton as SFCWithInstall<App, typeof ShareButton>;
