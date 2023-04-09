import type { App } from 'vue';
import type { SFCWithInstall } from '#/helpers';

import SearchBar from './src/SearchBar.vue';

/* istanbul ignore next */
SearchBar.install = (app: App): void => {
  app.component(SearchBar.name, SearchBar);
};

export default SearchBar as SFCWithInstall<App, typeof SearchBar>;
