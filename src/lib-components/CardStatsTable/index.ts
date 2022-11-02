import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardStatsTable from './src/CardStatsTable.vue';

/* istanbul ignore next */
CardStatsTable.install = (app: App): void => {
  app.component(CardStatsTable.name, CardStatsTable);
};

export default CardStatsTable as SFCWithInstall<App, typeof CardStatsTable>;
