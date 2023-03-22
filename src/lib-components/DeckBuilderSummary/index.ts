import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckBuilderSummary from './src/DeckBuilderSummary.vue';

/* istanbul ignore next */
DeckBuilderSummary.install = (app: App): void => {
  app.component(DeckBuilderSummary.name, DeckBuilderSummary);
};

export default DeckBuilderSummary as SFCWithInstall<
  App,
  typeof DeckBuilderSummary
>;
