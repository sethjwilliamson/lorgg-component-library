import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ArchetypeSidePanel from './src/ArchetypeSidePanel.vue';

/* istanbul ignore next */
ArchetypeSidePanel.install = (app: App): void => {
  app.component(ArchetypeSidePanel.name, ArchetypeSidePanel);
};

export default ArchetypeSidePanel as SFCWithInstall<
  App,
  typeof ArchetypeSidePanel
>;
