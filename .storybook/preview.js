import { app } from '@storybook/vue3';
import '../src/App.css';

import * as dataJson from '../data.json';
import * as setJson from '../setJson.json';

let setJsonObject = {};

for (let cardIndex in setJson) {
  if (isNaN(cardIndex)) {
    continue;
  }

  let card = setJson[cardIndex];

  setJsonObject[card.cardCode] = card;
}

app.config.globalProperties.dataJson = dataJson;
app.config.globalProperties.setJson = setJson;
app.config.globalProperties.setJsonObject = setJsonObject;

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

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
