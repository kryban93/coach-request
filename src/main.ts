import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import BaseCard from "./components/base-card/base-card.vue";
import BaseButton from "./components/base-button/base-button.vue";
import BaseBadge from "./components/base-badge/base-badge.vue";
import BaseSpinner from "./components/base-spinner/base-spinner.vue";
import BaseDialog from "./components/base-dialog/base-dialog.vue";
const app = createApp(App);

app.use(router);
app.use(store);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
