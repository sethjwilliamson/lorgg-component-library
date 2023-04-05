import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ProfileChampionRow from './src/ProfileChampionRow.vue';

/* istanbul ignore next */
ProfileChampionRow.install = (app: App): void => {
  app.component(ProfileChampionRow.name, ProfileChampionRow);
};

export default ProfileChampionRow as SFCWithInstall<
  App,
  typeof ProfileChampionRow
>;
