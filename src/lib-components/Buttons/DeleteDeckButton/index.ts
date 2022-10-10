import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import DeleteDeckButton from './src/DeleteDeckButton.vue';

/* istanbul ignore next */
DeleteDeckButton.install = (app: App): void => {
  app.component(DeleteDeckButton.name, DeleteDeckButton);
};

export default DeleteDeckButton as SFCWithInstall<App, typeof DeleteDeckButton>;
