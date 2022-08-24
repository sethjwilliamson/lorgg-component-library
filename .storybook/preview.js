import {app} from '@storybook/vue3'

console.log(app)

import * as dataJson from '../data.json';
import * as setJson from '../setJson.json';

console.log(dataJson)
console.log(setJson)

let setJsonObject = {};

for ( let cardIndex in setJson ) {
  if ( isNaN(cardIndex)) {
    continue;
  }

  let card = setJson[cardIndex]

  setJsonObject[card.cardCode] = card
}

app.config.globalProperties.dataJson = dataJson;
app.config.globalProperties.setJson = setJson;
app.config.globalProperties.setJsonObject = setJsonObject;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}