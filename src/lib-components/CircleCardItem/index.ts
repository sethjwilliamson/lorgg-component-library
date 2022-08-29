import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CircleCardItem from './src/CircleCardItem.vue';

/* istanbul ignore next */
CircleCardItem.install = (app: App): void => {
  app.component(CircleCardItem.name, CircleCardItem);
};

export default CircleCardItem as SFCWithInstall<App, typeof CircleCardItem>;
