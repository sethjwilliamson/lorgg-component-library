import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import EquipmentIcon from './src/EquipmentIcon.vue';

/* istanbul ignore next */
EquipmentIcon.install = (app: App): void => {
  app.component(EquipmentIcon.name, EquipmentIcon);
};

export default EquipmentIcon as SFCWithInstall<App, typeof EquipmentIcon>;
