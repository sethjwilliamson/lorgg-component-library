import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckSidePanel from './src/DeckSidePanel.vue';

/* istanbul ignore next */
DeckSidePanel.install = (app: App): void => {
  app.component(DeckSidePanel.name, DeckSidePanel);
};

export default DeckSidePanel as SFCWithInstall<App, typeof DeckSidePanel>;
