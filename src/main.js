import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import "./styles/styles.css";

import App from "./App.vue";

Vue.use(VueCompositionAPI);

const app = createApp({
  render: () => h(App),
});

app.mount("#app");
