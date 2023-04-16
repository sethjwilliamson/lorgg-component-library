import { app } from '@storybook/vue3';
import '../src/App.css';
import './storybook.css';
import { createPinia } from 'pinia';
import { useJsonStore } from '../src/helpers/stores';
import 'tippy.js/dist/tippy.css';
import '@vueform/multiselect/themes/default.css';
import { setupi18n } from '../src/setup/i18n';

// TODO: This should be removed eventually. Just meant for testing.
const pinia = createPinia();
app.use(pinia);

app.use(setupi18n());

import * as dataJson from '../data.json';
import { default as cardJsonObject } from '../cardJson.json';

useJsonStore().updateDataJson(dataJson);
useJsonStore().updateCardJson(Object.values(cardJsonObject));
useJsonStore().updateCardJsonObject(cardJsonObject);

// ----- DAYJS

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

console.log(dayjs().to(dayjs('1990-01-01')));

app.provide('dayjs', dayjs);

// ---- ICONS
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { importIcons } from '../src/icons';

importIcons();
app.component('font-awesome-icon', FontAwesomeIcon);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
