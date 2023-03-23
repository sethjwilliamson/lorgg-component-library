import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckDifferences from './src/DeckDifferences.vue';

/* istanbul ignore next */
DeckDifferences.install = (app: App): void => {
  app.component(DeckDifferences.name, DeckDifferences);
};

export default DeckDifferences as SFCWithInstall<App, typeof DeckDifferences>;
