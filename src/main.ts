import { createApp, App as AppType } from 'vue'
import App from './App.vue';
import {setupI18n} from "@/plugins/i18n";

const app = createApp(App);

setupI18n(app);

app.mount("#app");
