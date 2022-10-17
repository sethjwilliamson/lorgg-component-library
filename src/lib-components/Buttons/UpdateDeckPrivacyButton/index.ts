import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import UpdateDeckPrivacyButton from './src/UpdateDeckPrivacyButton.vue';

/* istanbul ignore next */
UpdateDeckPrivacyButton.install = (app: App): void => {
  app.component(UpdateDeckPrivacyButton.name, UpdateDeckPrivacyButton);
};

export default UpdateDeckPrivacyButton as SFCWithInstall<
  App,
  typeof UpdateDeckPrivacyButton
>;
