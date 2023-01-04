import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckHighlightCards from './src/DeckHighlightCards.vue';

/* istanbul ignore next */
DeckHighlightCards.install = (app: App): void => {
  app.component(DeckHighlightCards.name, DeckHighlightCards);
};

export default DeckHighlightCards as SFCWithInstall<
  App,
  typeof DeckHighlightCards
>;
