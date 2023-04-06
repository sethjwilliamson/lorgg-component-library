import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ProfileArchetypeTable from './src/ProfileArchetypeTable.vue';

/* istanbul ignore next */
ProfileArchetypeTable.install = (app: App): void => {
  app.component(ProfileArchetypeTable.name, ProfileArchetypeTable);
};

export default ProfileArchetypeTable as SFCWithInstall<
  App,
  typeof ProfileArchetypeTable
>;
