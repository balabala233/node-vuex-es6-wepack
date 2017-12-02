// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VTooltip from 'v-tooltip';
import axios from 'axios';
import VueI18n from 'vue-i18n';
import messages from './assets/i18n';
import myPlugin from './assets/common';
import config from './assets/config';
//移入移动端的mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
//引入个别组建
// import { Button, Cell } from 'mint-ui'
// Vue.use(Button);

// 插件的引用方法
Vue.use(VTooltip);
Vue.use(VueI18n);
Vue.use(MintUI);

// 全局移入自定义插件
Vue.use(myPlugin);
Vue.use(config);

// 定义vue全局变量
Vue.prototype.$http = axios;
Vue.prototype.$projectName = process.env.NODE_ENV === 'production' ? window.projectPath + '/' : '/shopdata/';

Vue.config.productionTip = false;

const i18n = new VueI18n({
    locale: window.language || 'zh',
    messages
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: { App }
});
