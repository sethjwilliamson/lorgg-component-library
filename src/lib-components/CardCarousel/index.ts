import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardCarousel from './src/CardCarousel.vue';

/* istanbul ignore next */
CardCarousel.install = (app: App): void => {
  app.component(CardCarousel.name, CardCarousel);
};

export default CardCarousel as SFCWithInstall<App, typeof CardCarousel>;
