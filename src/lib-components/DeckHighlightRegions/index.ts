import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckHighlightRegions from './src/DeckHighlightRegions.vue';

/* istanbul ignore next */
DeckHighlightRegions.install = (app: App): void => {
  app.component(DeckHighlightRegions.name, DeckHighlightRegions);
};

export default DeckHighlightRegions as SFCWithInstall<
  App,
  typeof DeckHighlightRegions
>;
