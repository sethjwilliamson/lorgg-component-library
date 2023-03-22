import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import ChampionIcon from './src/ChampionIcon.vue';

/* istanbul ignore next */
ChampionIcon.install = (app: App): void => {
  app.component(ChampionIcon.name, ChampionIcon);
};

export default ChampionIcon as SFCWithInstall<App, typeof ChampionIcon>;
