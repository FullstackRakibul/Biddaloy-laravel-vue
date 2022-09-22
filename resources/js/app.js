import './bootstrap';
import 'flowbite';

import {createApp} from "vue";
import App from "./layouts/app.vue";
import "../css/app.css";
import router from "./router/router.js";
import VueSplide from '@splidejs/vue-splide';


const app = createApp(App);

app.use(router);
app.use(VueSplide);
app.mount("#app");
