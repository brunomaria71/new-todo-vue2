import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";

import App from "./App.vue";

Vue.use(VueCompositionAPI);

const app = createApp({
  render: () => h(App),
});

app.mount("#app");
