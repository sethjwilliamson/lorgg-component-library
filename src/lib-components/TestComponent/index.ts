import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import TestComponent from './src/TestComponent.vue';

/* istanbul ignore next */
TestComponent.install = (app: App): void => {
  app.component(TestComponent.name, TestComponent);
};

export default TestComponent as SFCWithInstall<App, typeof TestComponent>;
