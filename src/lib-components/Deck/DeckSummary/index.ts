import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import DeckSummary from './src/DeckSummary.vue';

/* istanbul ignore next */
DeckSummary.install = (app: App): void => {
  app.component(DeckSummary.name, DeckSummary);
};

export default DeckSummary as SFCWithInstall<App, typeof DeckSummary>;
