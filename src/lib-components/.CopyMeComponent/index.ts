import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import CopyMeComponent from './src/CopyMeComponent.vue';

/* istanbul ignore next */
CopyMeComponent.install = (app: App): void => {
  app.component(CopyMeComponent.name, CopyMeComponent);
};

export default CopyMeComponent as SFCWithInstall<App, typeof CopyMeComponent>;
