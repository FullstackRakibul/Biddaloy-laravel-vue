import './bootstrap';
import 'flowbite';

import {createApp} from "vue";
import App from "../layouts/app.vue";
import "../css/app.css";

const app = createApp(App);

app.mount("#app")
