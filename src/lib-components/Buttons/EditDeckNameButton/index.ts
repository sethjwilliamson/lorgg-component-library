import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import EditDeckNameButton from './src/EditDeckNameButton.vue';

/* istanbul ignore next */
EditDeckNameButton.install = (app: App): void => {
  app.component(EditDeckNameButton.name, EditDeckNameButton);
};

export default EditDeckNameButton as SFCWithInstall<
  App,
  typeof EditDeckNameButton
>;
