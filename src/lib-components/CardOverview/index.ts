import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardOverview from './src/CardOverview.vue';

/* istanbul ignore next */
CardOverview.install = (app: App): void => {
  app.component(CardOverview.name, CardOverview);
};

export default CardOverview as SFCWithInstall<App, typeof CardOverview>;
