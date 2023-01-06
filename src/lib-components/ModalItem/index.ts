import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ModalItem from './src/ModalItem.vue';

/* istanbul ignore next */
ModalItem.install = (app: App): void => {
  app.component(ModalItem.name, ModalItem);
};

export default ModalItem as SFCWithInstall<App, typeof ModalItem>;
