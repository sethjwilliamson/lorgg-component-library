import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import CardsRow from './src/CardsRow.vue';

/* istanbul ignore next */
CardsRow.install = (app: App): void => {
  app.component(CardsRow.name, CardsRow);
};

export default CardsRow as SFCWithInstall<App, typeof CardsRow>;
