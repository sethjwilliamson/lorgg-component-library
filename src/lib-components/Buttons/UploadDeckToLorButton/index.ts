import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import UploadDeckToLorButton from './src/UploadDeckToLorButton.vue';

/* istanbul ignore next */
UploadDeckToLorButton.install = (app: App): void => {
  app.component(UploadDeckToLorButton.name, UploadDeckToLorButton);
};

export default UploadDeckToLorButton as SFCWithInstall<
  App,
  typeof UploadDeckToLorButton
>;
