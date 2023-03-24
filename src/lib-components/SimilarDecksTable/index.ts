import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import SimilarDecksTable from './src/SimilarDecksTable.vue';

/* istanbul ignore next */
SimilarDecksTable.install = (app: App): void => {
  app.component(SimilarDecksTable.name, SimilarDecksTable);
};

export default SimilarDecksTable as SFCWithInstall<
  App,
  typeof SimilarDecksTable
>;
