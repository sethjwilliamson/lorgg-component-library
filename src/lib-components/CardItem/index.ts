import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardItem from './src/CardItem.vue';

/* istanbul ignore next */
CardItem.install = (app: App): void => {
  app.component(CardItem.name, CardItem);
};

// export type {
//     CardItemProps,
//     CardItemPropRoute,
//     CardItemInstance
// } from './src/types';
export default CardItem as SFCWithInstall<App, typeof CardItem>;
