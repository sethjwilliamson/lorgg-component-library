import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ProfileChampionTable from './src/ProfileChampionTable.vue';

/* istanbul ignore next */
ProfileChampionTable.install = (app: App): void => {
  app.component(ProfileChampionTable.name, ProfileChampionTable);
};

export default ProfileChampionTable as SFCWithInstall<
  App,
  typeof ProfileChampionTable
>;
