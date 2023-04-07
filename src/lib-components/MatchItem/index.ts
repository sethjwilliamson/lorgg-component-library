import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import MatchItem from './src/MatchItem.vue';

/* istanbul ignore next */
MatchItem.install = (app: App): void => {
  app.component(MatchItem.name, MatchItem);
};

export default MatchItem as SFCWithInstall<App, typeof MatchItem>;
