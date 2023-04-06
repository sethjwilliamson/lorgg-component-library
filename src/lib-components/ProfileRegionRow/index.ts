import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ProfileRegionRow from './src/ProfileRegionRow.vue';

/* istanbul ignore next */
ProfileRegionRow.install = (app: App): void => {
  app.component(ProfileRegionRow.name, ProfileRegionRow);
};

export default ProfileRegionRow as SFCWithInstall<App, typeof ProfileRegionRow>;
