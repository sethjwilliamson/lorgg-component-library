import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import SidePanelSectionPane from './src/SidePanelSectionPane.vue';

/* istanbul ignore next */
SidePanelSectionPane.install = (app: App): void => {
  app.component(SidePanelSectionPane.name, SidePanelSectionPane);
};

export default SidePanelSectionPane as SFCWithInstall<
  App,
  typeof SidePanelSectionPane
>;
