import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { DataJson, CardJson, CardJsonObject } from '../types/jsons';
import { useJsonStore } from './helpers/stores';
import './App.css';
import 'tippy.js/dist/tippy.css';
import '@vueform/multiselect/themes/default.css';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

// TODO: This should be removed eventually. Just meant for testing.

import * as dataJson from '../data.json';
import { default as cardJsonObject } from '../cardJson.json';

useJsonStore().updateDataJson(dataJson as DataJson);
useJsonStore().updateCardJson(Object.values(cardJsonObject) as CardJson);
useJsonStore().updateCardJsonObject(cardJsonObject as CardJsonObject);

// ----- DAYJS
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
app.provide('dayjs', dayjs);

// ---- ICONS

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
  faMaximize,
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
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faRedditAlien,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { setupi18n } from './setup/i18n';

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
  faMaximize,
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
  faShareNodes,
);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.use(setupi18n());

app.mount('#app');
