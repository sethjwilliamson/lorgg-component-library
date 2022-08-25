import type { App } from 'vue';

import TestComponent from './TestComponent';

// install
const install = (app: App): void => {
  app.use(TestComponent);
};

export default { install };

export { TestComponent };

export * from './TestComponent';
