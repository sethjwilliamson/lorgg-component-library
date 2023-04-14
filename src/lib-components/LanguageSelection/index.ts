import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import LanguageSelection from './src/LanguageSelection.vue';

/* istanbul ignore next */
LanguageSelection.install = (app: App): void => {
  app.component(LanguageSelection.name, LanguageSelection);
};

export default LanguageSelection as SFCWithInstall<
  App,
  typeof LanguageSelection
>;
