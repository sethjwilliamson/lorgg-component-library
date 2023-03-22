import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckBuilderSummaryType from './src/DeckBuilderSummaryType.vue';

/* istanbul ignore next */
DeckBuilderSummaryType.install = (app: App): void => {
  app.component(DeckBuilderSummaryType.name, DeckBuilderSummaryType);
};

export default DeckBuilderSummaryType as SFCWithInstall<
  App,
  typeof DeckBuilderSummaryType
>;
