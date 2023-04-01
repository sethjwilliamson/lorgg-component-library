import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import RevealCarousel from './src/RevealCarousel.vue';

/* istanbul ignore next */
RevealCarousel.install = (app: App): void => {
  app.component(RevealCarousel.name, RevealCarousel);
};

export default RevealCarousel as SFCWithInstall<App, typeof RevealCarousel>;
