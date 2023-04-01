import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import BuiltDeckPreview from './src/BuiltDeckPreview.vue';

/* istanbul ignore next */
BuiltDeckPreview.install = (app: App): void => {
  app.component(BuiltDeckPreview.name, BuiltDeckPreview);
};

export default BuiltDeckPreview as SFCWithInstall<App, typeof BuiltDeckPreview>;
