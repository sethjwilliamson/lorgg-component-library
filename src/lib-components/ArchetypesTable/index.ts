import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ArchetypesTable from './src/ArchetypesTable.vue';

/* istanbul ignore next */
ArchetypesTable.install = (app: App): void => {
  app.component(ArchetypesTable.name, ArchetypesTable);
};

export default ArchetypesTable as SFCWithInstall<App, typeof ArchetypesTable>;
