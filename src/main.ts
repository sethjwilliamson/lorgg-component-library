import { createApp, ref } from 'vue';
import App from './App.vue';
import { createPinia, defineStore } from 'pinia';
import { DataJson, SetJson, SetJsonCard, SetJsonObject } from '../types/jsons';
import { useJsonStore } from './helpers/stores';
import './App.css';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

// TODO: This should be removed eventually. Just meant for testing.

import * as dataJson from '../data.json';
import { default as setJson } from '../setJson.json';

const setJsonObject: SetJsonObject = {};

for (const card of setJson as any as SetJson) {
  setJsonObject[card.cardCode] = card;
}

useJsonStore().updateDataJson(dataJson as DataJson);
useJsonStore().updateSetJson(setJson as SetJson);
useJsonStore().updateSetJsonObject(setJsonObject);

//

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronCircleDown,
  faChevronDown,
  faSearchPlus,
  faFilter,
  faTimes,
  faPlus,
  faMinus,
  faInfoCircle,
  faEye,
  faCheck,
  faQuestionCircle,
  faSort,
  faSortUp,
  faSortDown,
  faLock,
  faUnlock,
  faBars,
  faSearch,
  faLanguage,
  faTh,
  faExpandAlt,
  faCopy,
  faHandPaper,
  faWrench,
  faPencilAlt,
  faTrashAlt,
  faEllipsisV,
  faImage,
  faSignOutAlt,
  faSyncAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faRedditAlien,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faChevronCircleDown,
  faChevronDown,
  faSearchPlus,
  faFilter,
  faTimes,
  faPlus,
  faMinus,
  faInfoCircle,
  faEye,
  faCheck,
  faQuestionCircle,
  faSort,
  faSortUp,
  faSortDown,
  faLock,
  faUnlock,
  faBars,
  faSearch,
  faLanguage,
  faTh,
  faExpandAlt,
  faCopy,
  faHandPaper,
  faWrench,
  faPencilAlt,
  faTrashAlt,
  faEllipsisV,
  faTwitter,
  faImage,
  faFacebook,
  faRedditAlien,
  faDiscord,
  faSignOutAlt,
  faSyncAlt,
  faCog,
);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    dataJson: DataJson;
    setJson: SetJson;
    bardCards: Array<SetJsonCard>;
    jhinCards: Array<SetJsonCard>;
    jaxCards: Array<SetJsonCard>;
    kaynCards: Array<SetJsonCard>;
    evelynnCards: Array<SetJsonCard>;
    setJsonObject: SetJsonObject;
  }
}
