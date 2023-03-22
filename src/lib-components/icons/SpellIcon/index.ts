import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import SpellIcon from './src/SpellIcon.vue';

/* istanbul ignore next */
SpellIcon.install = (app: App): void => {
  app.component(SpellIcon.name, SpellIcon);
};

export default SpellIcon as SFCWithInstall<App, typeof SpellIcon>;
