import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import CheckboxItem from './src/CheckboxItem.vue';

/* istanbul ignore next */
CheckboxItem.install = (app: App): void => {
  app.component(CheckboxItem.name, CheckboxItem);
};

export default CheckboxItem as SFCWithInstall<App, typeof CheckboxItem>;
