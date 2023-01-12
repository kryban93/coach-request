import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import BaseCard from "./components/base-card/base-card.vue";
import BaseButton from "./components/base-button/base-button.vue";
import BaseBadge from "./components/base-badge/base-badge.vue";
const app = createApp(App);

app.use(router);
app.use(store);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);

app.mount("#app");
