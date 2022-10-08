import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardSliceItem from './src/CardSliceItem.vue';

/* istanbul ignore next */
CardSliceItem.install = (app: App): void => {
  app.component(CardSliceItem.name, CardSliceItem);
};

export default CardSliceItem as SFCWithInstall<App, typeof CardSliceItem>;
