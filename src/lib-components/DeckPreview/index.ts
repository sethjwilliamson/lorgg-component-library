import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckPreview from './src/DeckPreview.vue';

/* istanbul ignore next */
DeckPreview.install = (app: App): void => {
  app.component(DeckPreview.name, DeckPreview);
};

export default DeckPreview as SFCWithInstall<App, typeof DeckPreview>;
