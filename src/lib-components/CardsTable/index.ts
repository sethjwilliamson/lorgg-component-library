import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import CardsTable from './src/CardsTable.vue';

/* istanbul ignore next */
CardsTable.install = (app: App): void => {
  app.component(CardsTable.name, CardsTable);
};

export default CardsTable as SFCWithInstall<App, typeof CardsTable>;
