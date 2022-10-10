import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CheckboxItemManaCost from './src/CheckboxItemManaCost.vue';

/* istanbul ignore next */
CheckboxItemManaCost.install = (app: App): void => {
  app.component(CheckboxItemManaCost.name, CheckboxItemManaCost);
};

export default CheckboxItemManaCost as SFCWithInstall<
  App,
  typeof CheckboxItemManaCost
>;
