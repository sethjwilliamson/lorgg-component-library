import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import ManaHexagonIcon from './src/ManaHexagonIcon.vue';

/* istanbul ignore next */
ManaHexagonIcon.install = (app: App): void => {
  app.component(ManaHexagonIcon.name, ManaHexagonIcon);
};

export default ManaHexagonIcon as SFCWithInstall<App, typeof ManaHexagonIcon>;
