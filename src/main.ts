import Vue, {createApp} from '@vue/compat';
import {createPinia} from 'pinia';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

import i18n from '@/i18n';
import App from '@/App.vue';
import router from '@/router';
import * as api from '@/api';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/main.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mixin({
    methods: {
        get: api.get,
        getById: api.getById,
        post: api.post,
        put: api.put,
        remove: api.remove
    }
});
app.use(i18n);

app.mount('#app');
