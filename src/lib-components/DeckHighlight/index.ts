import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckHighlight from './src/DeckHighlight.vue';

/* istanbul ignore next */
DeckHighlight.install = (app: App): void => {
  app.component(DeckHighlight.name, DeckHighlight);
};

export default DeckHighlight as SFCWithInstall<App, typeof DeckHighlight>;
