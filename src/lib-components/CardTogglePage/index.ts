import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardTogglePage from './src/CardTogglePage.vue';

/* istanbul ignore next */
CardTogglePage.install = (app: App): void => {
  app.component(CardTogglePage.name, CardTogglePage);
};

export default CardTogglePage as SFCWithInstall<App, typeof CardTogglePage>;
