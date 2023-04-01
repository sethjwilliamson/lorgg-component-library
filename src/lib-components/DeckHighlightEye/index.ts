import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckHighlightEye from './src/DeckHighlightEye.vue';

/* istanbul ignore next */
DeckHighlightEye.install = (app: App): void => {
  app.component(DeckHighlightEye.name, DeckHighlightEye);
};

export default DeckHighlightEye as SFCWithInstall<App, typeof DeckHighlightEye>;
