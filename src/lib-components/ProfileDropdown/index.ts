import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ProfileDropdown from './src/ProfileDropdown.vue';

/* istanbul ignore next */
ProfileDropdown.install = (app: App): void => {
  app.component(ProfileDropdown.name, ProfileDropdown);
};

export default ProfileDropdown as SFCWithInstall<App, typeof ProfileDropdown>;
