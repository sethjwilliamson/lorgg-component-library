import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckButtons from './src/DeckButtons.vue';

/* istanbul ignore next */
DeckButtons.install = (app: App): void => {
  app.component(DeckButtons.name, DeckButtons);
};

export default DeckButtons as SFCWithInstall<App, typeof DeckButtons>;
