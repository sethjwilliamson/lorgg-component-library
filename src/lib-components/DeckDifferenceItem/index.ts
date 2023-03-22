import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckDifferenceItem from './src/DeckDifferenceItem.vue';

/* istanbul ignore next */
DeckDifferenceItem.install = (app: App): void => {
  app.component(DeckDifferenceItem.name, DeckDifferenceItem);
};

export default DeckDifferenceItem as SFCWithInstall<
  App,
  typeof DeckDifferenceItem
>;
