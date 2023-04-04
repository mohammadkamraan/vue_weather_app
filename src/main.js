import { createApp } from "vue";
import App from "./App.vue";

import AppStore from "./store/store";

const app = createApp(App);

app.use(AppStore);

app.mount("#app");
