import type { App } from 'vue';

import type { SFCWithInstall } from '#/helpers';

import SocialMediaLinks from './src/SocialMediaLinks.vue';

/* istanbul ignore next */
SocialMediaLinks.install = (app: App): void => {
  app.component(SocialMediaLinks.name, SocialMediaLinks);
};

export default SocialMediaLinks as SFCWithInstall<App, typeof SocialMediaLinks>;
