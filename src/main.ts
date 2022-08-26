import { createApp } from 'vue';
import App from './App.vue';
import { DataJson, SetJson, SetJsonObject } from '../types/jsons';
import './App.css';

import * as dataJson from '../data.json';
import { default as setJson } from '../setJson.json';

const setJsonObject: SetJsonObject = {};

for (const card of setJson as any as SetJson) {
  setJsonObject[card.cardCode] = card;
}

const app = createApp(App);

app.config.globalProperties.dataJson = dataJson as DataJson;
app.config.globalProperties.setJson = setJson as SetJson;
app.config.globalProperties.setJsonObject = setJsonObject as SetJsonObject;

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
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    dataJson: DataJson;
    setJson: SetJson;
    setJsonObject: SetJsonObject;
  }
}
