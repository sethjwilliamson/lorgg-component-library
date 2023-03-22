import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import DeckIcon from './src/DeckIcon.vue';

/* istanbul ignore next */
DeckIcon.install = (app: App): void => {
  app.component(DeckIcon.name, DeckIcon);
};

export default DeckIcon as SFCWithInstall<App, typeof DeckIcon>;
