import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import SocialLinks from './src/SocialLinks.vue';

/* istanbul ignore next */
SocialLinks.install = (app: App): void => {
  app.component(SocialLinks.name, SocialLinks);
};

export default SocialLinks as SFCWithInstall<App, typeof SocialLinks>;
