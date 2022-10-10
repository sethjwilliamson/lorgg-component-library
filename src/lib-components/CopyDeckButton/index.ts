import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CopyDeckButton from './src/CopyDeckButton.vue';

/* istanbul ignore next */
CopyDeckButton.install = (app: App): void => {
  app.component(CopyDeckButton.name, CopyDeckButton);
};

export default CopyDeckButton as SFCWithInstall<App, typeof CopyDeckButton>;
