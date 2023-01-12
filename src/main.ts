import { createApp } from "vue";
import router from "./router";

import "./assets/main.css";

const app = createApp({});

app.use(router);

app.mount("#app");
