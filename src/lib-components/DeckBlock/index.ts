import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DeckBlock from './src/DeckBlock.vue';

/* istanbul ignore next */
DeckBlock.install = (app: App): void => {
  app.component(DeckBlock.name, DeckBlock);
};

export default DeckBlock as SFCWithInstall<App, typeof DeckBlock>;
