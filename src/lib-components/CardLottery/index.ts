import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardLottery from './src/CardLottery.vue';

/* istanbul ignore next */
CardLottery.install = (app: App): void => {
  app.component(CardLottery.name, CardLottery);
};

export default CardLottery as SFCWithInstall<App, typeof CardLottery>;
