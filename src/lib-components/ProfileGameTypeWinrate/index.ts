import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ProfileGameTypeWinrate from './src/ProfileGameTypeWinrate.vue';

/* istanbul ignore next */
ProfileGameTypeWinrate.install = (app: App): void => {
  app.component(ProfileGameTypeWinrate.name, ProfileGameTypeWinrate);
};

export default ProfileGameTypeWinrate as SFCWithInstall<
  App,
  typeof ProfileGameTypeWinrate
>;
