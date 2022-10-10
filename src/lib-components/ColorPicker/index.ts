import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import ColorPicker from './src/ColorPicker.vue';

/* istanbul ignore next */
ColorPicker.install = (app: App): void => {
  app.component(ColorPicker.name, ColorPicker);
};

export default ColorPicker as SFCWithInstall<App, typeof ColorPicker>;
