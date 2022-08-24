import { createApp } from 'vue'
import App from './App.vue'
import { DataJson, SetJson, SetJsonCard, SetJsonObject } from '../types/jsons'

console.log("TEST")
console.log("TEST")
console.log("TEST")
console.log("TEST")
console.log("TEST")

import * as dataJson from '../data.json'
import * as setJson from '../setJson.json'

let setJsonObject: SetJsonObject = {};

for ( let card of setJson as SetJson ) {
  setJsonObject[card.cardCode] = card
}

const app = createApp(App)

app.config.globalProperties.dataJson = dataJson as DataJson;
app.config.globalProperties.setJson = setJson as SetJson;
app.config.globalProperties.setJsonObject = setJsonObject as SetJsonObject;

app.mount("#app");

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties  {
    dataJson: DataJson,
    setJson: SetJson,
    setJsonObject: SetJsonObject
  }
}