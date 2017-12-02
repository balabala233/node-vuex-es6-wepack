// 定义mapAction中的名称
import * as space from './mutation-types.js';

export default {
	dowelcome ({commit, state}, data) {
		commit(space.WELCOME, data);
	},
	add ({commit, state}, data) {
		commit(space.COUNTER, data);
	},
	reduce({commit, state}, data) {
		commit(space.REDUCE, data);
	}
}


