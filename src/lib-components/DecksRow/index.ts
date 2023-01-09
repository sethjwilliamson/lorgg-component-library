import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import DecksRow from './src/DecksRow.vue';

/* istanbul ignore next */
DecksRow.install = (app: App): void => {
  app.component(DecksRow.name, DecksRow);
};

export default DecksRow as SFCWithInstall<App, typeof DecksRow>;
