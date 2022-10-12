import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardItem3d from './src/CardItem3d.vue';

/* istanbul ignore next */
CardItem3d.install = (app: App): void => {
  app.component(CardItem3d.name, CardItem3d);
};

export default CardItem3d as SFCWithInstall<App, typeof CardItem3d>;
