import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardStatsHeading from './src/CardStatsHeading.vue';

/* istanbul ignore next */
CardStatsHeading.install = (app: App): void => {
  app.component(CardStatsHeading.name, CardStatsHeading);
};

export default CardStatsHeading as SFCWithInstall<App, typeof CardStatsHeading>;
