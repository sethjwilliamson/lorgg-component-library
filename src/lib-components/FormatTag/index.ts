import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import FormatTag from './src/FormatTag.vue';

/* istanbul ignore next */
FormatTag.install = (app: App): void => {
  app.component(FormatTag.name, FormatTag);
};

export default FormatTag as SFCWithInstall<App, typeof FormatTag>;
