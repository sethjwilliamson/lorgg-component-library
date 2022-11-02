import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardStatsRow from './src/CardStatsRow.vue';

/* istanbul ignore next */
CardStatsRow.install = (app: App): void => {
  app.component(CardStatsRow.name, CardStatsRow);
};

export default CardStatsRow as SFCWithInstall<App, typeof CardStatsRow>;
