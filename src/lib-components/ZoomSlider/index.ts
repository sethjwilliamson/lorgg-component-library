import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import ZoomSlider from './src/ZoomSlider.vue';

/* istanbul ignore next */
ZoomSlider.install = (app: App): void => {
  app.component(ZoomSlider.name, ZoomSlider);
};

export default ZoomSlider as SFCWithInstall<App, typeof ZoomSlider>;
