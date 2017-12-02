// 作为公共状态和私有状态的引用入口
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import state from './state.js';
import mutations from './mutations.js';
import login from './module/login.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        // 加载模块状态
        login
    },
    strict: debug
});
