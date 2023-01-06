import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import OpenArchetypePageButton from './src/OpenArchetypePageButton.vue';

/* istanbul ignore next */
OpenArchetypePageButton.install = (app: App): void => {
  app.component(OpenArchetypePageButton.name, OpenArchetypePageButton);
};

export default OpenArchetypePageButton as SFCWithInstall<
  App,
  typeof OpenArchetypePageButton
>;
