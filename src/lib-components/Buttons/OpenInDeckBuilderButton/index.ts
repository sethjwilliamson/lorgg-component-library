import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import OpenInDeckBuilderButton from './src/OpenInDeckBuilderButton.vue';

/* istanbul ignore next */
OpenInDeckBuilderButton.install = (app: App): void => {
  app.component(OpenInDeckBuilderButton.name, OpenInDeckBuilderButton);
};

export default OpenInDeckBuilderButton as SFCWithInstall<
  App,
  typeof OpenInDeckBuilderButton
>;
