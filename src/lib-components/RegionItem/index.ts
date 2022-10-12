import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import RegionItem from './src/RegionItem.vue';

/* istanbul ignore next */
RegionItem.install = (app: App): void => {
  app.component(RegionItem.name, RegionItem);
};

export default RegionItem as SFCWithInstall<App, typeof RegionItem>;
