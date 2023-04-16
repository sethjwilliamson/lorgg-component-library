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

import { setupi18n } from './setup/i18n';
// ---- ICONS
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { importIcons } from './icons';

importIcons();

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.use(setupi18n());

app.mount('#app');
