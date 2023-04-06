import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ProfileArchetypeRow from './src/ProfileArchetypeRow.vue';

/* istanbul ignore next */
ProfileArchetypeRow.install = (app: App): void => {
  app.component(ProfileArchetypeRow.name, ProfileArchetypeRow);
};

export default ProfileArchetypeRow as SFCWithInstall<
  App,
  typeof ProfileArchetypeRow
>;
