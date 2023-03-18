import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ArchetypesRow from './src/ArchetypesRow.vue';

/* istanbul ignore next */
ArchetypesRow.install = (app: App): void => {
  app.component(ArchetypesRow.name, ArchetypesRow);
};

export default ArchetypesRow as SFCWithInstall<App, typeof ArchetypesRow>;
