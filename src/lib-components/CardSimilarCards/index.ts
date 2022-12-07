import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CardSimilarCards from './src/CardSimilarCards.vue';

/* istanbul ignore next */
CardSimilarCards.install = (app: App): void => {
  app.component(CardSimilarCards.name, CardSimilarCards);
};

export default CardSimilarCards as SFCWithInstall<App, typeof CardSimilarCards>;
