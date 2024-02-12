import { createApp } from 'vue';
import AppAdmin from './MainAppAdmin';
import AppWeb from './MainAppWeb';
import routerAdmin from './router/AdminRoute';
import store from "./store/index";
import i18n from "@/i18n";
import './styles/app.css';
import '../public/fontawesome/css/all.css';
import { createMetaManager } from 'vue-meta';
import CKEditor from '@ckeditor/ckeditor5-vue';
import webRoute from "@/router/WebRoute";

const firstPathUrl = window.location.pathname.split('/').filter(n => n)[0] ?? '';

if (firstPathUrl === 'admin') {
    const app = createApp(AppAdmin);
    app.use(routerAdmin);
    app.use(store);
    app.use(i18n);
    app.use(createMetaManager());
    app.use(CKEditor);
    app.mount('#app');
} else {
    const app = createApp(AppWeb);
    app.use(webRoute);
    app.use(store);
    app.use(i18n);
    app.use(createMetaManager());
    app.mount('#app');
}