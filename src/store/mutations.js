// 定义修改state的方法
import * as space from './mutation-types.js';
export default {
    [space.WELCOME] (state, data) {
        state.welcome = data;
    },
    [space.COUNTER] (state, data) {
    	state.count++;
    },
    [space.REDUCE](state, data) {
    	state.count--;
    }
};
