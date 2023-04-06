import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ProfileRegionTable from './src/ProfileRegionTable.vue';

/* istanbul ignore next */
ProfileRegionTable.install = (app: App): void => {
  app.component(ProfileRegionTable.name, ProfileRegionTable);
};

export default ProfileRegionTable as SFCWithInstall<
  App,
  typeof ProfileRegionTable
>;
