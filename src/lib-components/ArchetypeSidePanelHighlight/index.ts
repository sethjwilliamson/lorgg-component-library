import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import ArchetypeSidePanelHighlight from './src/ArchetypeSidePanelHighlight.vue';

/* istanbul ignore next */
ArchetypeSidePanelHighlight.install = (app: App): void => {
  app.component(ArchetypeSidePanelHighlight.name, ArchetypeSidePanelHighlight);
};

export default ArchetypeSidePanelHighlight as SFCWithInstall<
  App,
  typeof ArchetypeSidePanelHighlight
>;
