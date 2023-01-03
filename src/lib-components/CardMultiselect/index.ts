import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import CardMultiselect from './src/CardMultiselect.vue';

/* istanbul ignore next */
CardMultiselect.install = (app: App): void => {
  app.component(CardMultiselect.name, CardMultiselect);
};

export default CardMultiselect as SFCWithInstall<App, typeof CardMultiselect>;
