import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardItemLinkWrapper from './src/CardItemLinkWrapper.vue';

/* istanbul ignore next */
CardItemLinkWrapper.install = (app: App): void => {
  app.component(CardItemLinkWrapper.name, CardItemLinkWrapper);
};

export default CardItemLinkWrapper as SFCWithInstall<
  App,
  typeof CardItemLinkWrapper
>;
